import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allInfoSelector, changeInfoRegistry_imgs, changeInfoRegistryAddres, changeInfoRegistryText, changeInfoRegistryTime, changeInfoSelector } from '../../../store/slices/ChangeInfoSlice/ChangeInfoSlice';
import { useTranslation } from 'react-i18next';
import { birdLeft, birdRight, imageRestaurant, rings } from '../../../images/images';
import { openLinkModal } from '../../../store/slices/LinkModalSlice/LinkModalSlice';
import { editIcon } from '../../../iconsFolder/icons';
import { convertToBase64 } from '../../../utils/helperFunck';

function Wedding1Registry({ item }) {
    const { t } = useTranslation();
    const [registryTime, setRegistryTime] = useState('');
    const [registryText, setRegistryText] = useState('');
    const [registryAddres, setRegistryAddres] = useState('');
    const [registryAddressLink, setRegistryAddressLink] = useState('');
    const [registryItem, setRegistryItem] = useState(false);
    const registryRef = useRef(null);
    const allInfo = useSelector(allInfoSelector);
    const changeInfoState = useSelector(changeInfoSelector);
    const [file, setFile] = useState('');
    const dispatch = useDispatch();


    useEffect(() => {
        const handleScroll = () => {
            if (registryRef.current) {
                const offset = window.scrollY;
                if (offset > registryRef.current.offsetTop - 500) {
                    setRegistryItem(true);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        dispatch(changeInfoRegistryTime(registryTime));
    }, [registryTime]);


    useEffect(() => {
        dispatch(changeInfoRegistryText(registryText));
    }, [registryText])



    useEffect(() => {
        dispatch(changeInfoRegistryAddres(registryAddres));
    }, [registryAddres])


    function handleChange(e) {
        convertToBase64(e.target.files[0]).then((base64) => {
            setFile(base64)
        })
     }

      useEffect(() => {
        file && dispatch(changeInfoRegistry_imgs(file));
      }, [file, dispatch]);
    

    return (

        <div className='registry' ref={registryRef}>
            {
                registryItem &&
                <div className='image_marriage right'>
                    {changeInfoState === 'edit' && <label onChange={(e) => handleChange(e)}>
                        <input style={{ display: 'none' }} type="file" />
                        <span className='wedding1_edite_image'>{editIcon}</span>
                    </label>}

                    {
                      item.images &&   item.images.map((img, index) => {
                            return <img key={index} src={(changeInfoState === 'view' && file) || img.path} alt="not found" />
                        })
                    }
                </div>
            }
            {
                registryItem &&
                <div className='marriage_text left'>
                    <div className='birds'>
                        <div className='image_birds right_animation' >
                            <img src={birdLeft} alt="not found" />
                        </div>
                        <div className='image_birds' >
                            <img src={rings} alt="not found" />
                        </div>
                        <div className='image_birds left_animation' >
                            <img src={birdRight} alt="not found" />
                        </div>
                    </div>
                    <div className='about'>
                        <span className='marriage_title'>{t('regMarriage.0')}</span>
                        {changeInfoState === 'edit' ? <input type="time" placeholder='Ժամ' value={allInfo?.registryTime} className='event_inp' onChange={(e) => setRegistryTime(e.target.value)} /> : <span>{allInfo.registryTime || item.time}</span>}
                        {changeInfoState === 'edit' ? <input type="text" placeholder={t('placeholderWedding1.2')} value={allInfo?.registryText} className='event_inp' onChange={(e) => setRegistryText(e.target.value)} /> : <span>{allInfo.registryText || item.text}</span>}
                        {changeInfoState === 'edit' ? <input type="text" placeholder={t('placeholderWedding1.3')} value={allInfo?.registryAddres} className='event_inp' onChange={(e) => setRegistryAddres(e.target.value)} /> : <span>{allInfo.registryAddres || item.address}</span>}


                    </div>
                    <a href={item.address_link} target='_blank'>
                        <button className='get odd' onClick={() => dispatch(openLinkModal('registry'))}>{t('regMarriage.3')}</button>
                    </a>
                </div>
            }
        </div>
    )
}

export default Wedding1Registry