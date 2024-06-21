import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allInfoSelector, changeInfoChrchesAddres, changeInfoChrchesText, changeInfoChurch_imgs, changeInfoChurchTime, changeInfoSelector } from '../../../../store/slices/ChangeInfoSlice/ChangeInfoSlice';
import { useTranslation } from 'react-i18next';
import { church, editIcon } from '../../../../iconsFolder/icons';
import { imageChurch } from '../../../../images/images';
import { openLinkModal } from '../../../../store/slices/LinkModalSlice/LinkModalSlice';
import { convertToBase64 } from '../../../../utils/helperFunck';

function Wedding1Church({item}) {
    const { t, i18n } = useTranslation();
    const [churchItem, setChurchItem] = useState(false);
    const churchRef = useRef(null);
    const allInfo = useSelector(allInfoSelector);
    const dispatch = useDispatch();
    const changeInfoState = useSelector(changeInfoSelector);
    const [churchTime, setChurchTime] = useState(allInfo.churchesTime)
    const [churchText, setChurchText] = useState(allInfo.chrchesText)
    const [churchAddress, setChurchAddress] = useState(allInfo.chrchesAddres)
    const [file, setFile] = useState('');
    const [churchAddressLink, setChurchAddressLink] = useState(allInfo.churchAddressLink)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (churchRef.current && offset > churchRef.current.offsetTop - 500) {
                setChurchItem(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        dispatch(changeInfoChurchTime(churchTime))
    },[churchTime])
    

    useEffect(() => {
        dispatch(changeInfoChrchesText(churchText))
    },[churchText])


    useEffect(() => {
        dispatch(changeInfoChrchesAddres(churchAddress))
    },[churchAddress])


    function handleChange(e) {
        convertToBase64(e.target.files[0]).then((base64) => {
            setFile(base64)
        })
     }

    useEffect(() => {
        file && dispatch(changeInfoChurch_imgs(file));
      }, [file, dispatch]);


    return (
        <div className='church' ref={churchRef}>
            {
                churchItem &&
                <div className='marriage_text right'>
                    <span className='icon_marriage_church'>{church}</span>
                    <div className='about'>
                        <span className='marriage_title'>{t('marriage.0')}</span>
                        {changeInfoState === 'edit' ? <input className='event_inp' type="time" placeholder='Ժամ' value={allInfo.churchesTime} onChange={(e) => setChurchTime(e.target.value)} /> : <span>{allInfo.churchesTime || item.time}</span>}
                        {changeInfoState === 'edit' ? <input className='event_inp' type="text" placeholder='Տեքստ' value={allInfo.chrchesText} onChange={(e) => setChurchText(e.target.value)} /> : <span>{allInfo.chrchesText || item.text}</span>}
                        {changeInfoState === 'edit' ? <input className='event_inp' type="text" placeholder='Հասցե' value={allInfo.chrchesAddres} onChange={(e) => setChurchAddress(e.target.value)}/> : <span>{allInfo.chrchesAddres ||item.address}</span>}
                    </div>
                    <a href={item.address_link} target='_blank'>
                        <button className='get even' onClick={() => dispatch(openLinkModal('church'))}>{t('marriage.3')}</button>
                    </a>
                </div>
            }
            {
                churchItem &&
                <div className='image_marriage left'>
                    {changeInfoState === 'edit' && <label onChange={(e) => handleChange(e)}>
                        <input style={{ display: 'none' }} type="file" />
                        <span className='wedding1_edite_image'>{editIcon}</span>
                    </label>}
                     {
                        item.images.map((img, index) => {
                            return <img key={index} src={(changeInfoState === 'view' && file) || img} alt="not found" />
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Wedding1Church