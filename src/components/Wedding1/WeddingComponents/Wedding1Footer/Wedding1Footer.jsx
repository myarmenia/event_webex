import React, { memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { footerBackground, handLeft, handRight, redHeart, wedding } from '../../../../images/images';
import './Wedding1Footer.css';
import { allInfoSelector, changeFeedback, changeInfoSelector, changeInfoWatsUp } from '../../../../store/slices/ChangeInfoSlice/ChangeInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { postPrivateProject } from '../../../../store/slices/privateProjectSlice/privateProjectApi';
import { privateProjectSelector } from '../../../../store/slices/privateProjectSlice/privateProjectSlice';

function Wedding1Footer() {
    const { t, i18n } = useTranslation();
    const footerRef = useRef(null);
    const [viewhands, setViewHands] = useState(false);
    const [wutsUpNumber, setWutsUpNumber] = useState('');
    const allInfo = useSelector(allInfoSelector);
    const changeInfoState = useSelector(changeInfoSelector);
    const respProj = useSelector(privateProjectSelector);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY > footerRef.current.offsetTop + 300) {
                setViewHands(true)
            }

        })
    }, [])


    useEffect(() => {
        wutsUpNumber && dispatch(changeFeedback(wutsUpNumber));
        
      }, [wutsUpNumber]);


      const privateProject = () => {
        if (wutsUpNumber !== '') {
            const resultObj = {
                template_id: '1',
                date: allInfo.date,
                // sound_path: allInfo.music_path,
                feedBack: allInfo.feedback,
                invitation_name: allInfo.nameBoy + '-' + allInfo.nameGirl,
                sections: [
                    {
                        section_number: 1,
                        ...(allInfo.nameBoy && { name_1: allInfo.nameBoy }),
                        ...(allInfo.nameGirl && { name_2: allInfo.nameGirl })
                    },

                    {   
                        section_number: 2,
                        ...(allInfo.eventTime && { time: allInfo.eventTime }),
                        ...(allInfo.eventText && { text: allInfo.eventText }),
                        ...(allInfo.eventAddres && { address: allInfo.eventAddres }),
                        ...(allInfo.event_addres_link && { address_link: allInfo.event_addres_link }),
                        // ...(allInfo.event_imgs.length > 0 && { images: allInfo.event_imgs })
                    },

                    {
                        section_number: 3,
                        ...(allInfo.churchesTime && { time: allInfo.churchesTime }),
                        ...(allInfo.chrchesText && { text: allInfo.chrchesText }),
                        ...(allInfo.chrchesAddres && { address: allInfo.chrchesAddres }),
                        ...(allInfo.churches_addres_link && { address_link: allInfo.churches_addres_link }),
                        // ...(allInfo.churches_imgs.length > 0 && { images: allInfo.churches_imgs })
                    },

                    {
                        section_number: 4,
                        ...(allInfo.registryTime && { time: allInfo.registryTime }),
                        ...(allInfo.registryText && { text: allInfo.registryText }),
                        ...(allInfo.registryAddres && { address: allInfo.registryAddres }),
                        ...(allInfo.registry_addres_link && { address_link: allInfo.registry_addres_link }),
                        // ...(allInfo.registry_imgs.length > 0 && { images: allInfo.registry_imgs })
                    },

                    {
                        section_number: 5,
                        ...(allInfo.banquetTime && { time: allInfo.banquetTime }),
                        ...(allInfo.banquetText && { text: allInfo.banquetText }),
                        ...(allInfo.banquetAddres && { address: allInfo.banquetAddres }),
                        ...(allInfo.banquet_addres_link && { address_link: allInfo.banquet_addres_link }),
                        // ...(allInfo.banquet_imgs.length > 0 && { images: allInfo.banquet_imgs })
                    }
                ].filter(item => Object.keys(item).length !== 1),
                  

            }
            
          dispatch(postPrivateProject(resultObj)).then(res =>{
             if (res.payload.success) {
                window.location.href = res.payload.data.redirect_url
             }
          })
          
        }

       
      }

    return (
        <footer style={{ backgroundImage: `url(${footerBackground})` } }  ref={footerRef}>
            <div className='container'>
                <div className='footer'>
                    {changeInfoState === 'edit' && <div className='wats_up_number_div'>
                        <h1>Գրել Wats Up-ի հեռախոսահամար</h1>
                        <input type="text" value={wutsUpNumber} placeholder='Համար'  onChange={(e) => setWutsUpNumber(e.target.value)}/>
                        <button className='wats_up_number_button' onClick={privateProject}>ՊԱՏՎԻՐԵԼ</button>
                    </div>}
                    <h1>{t('formText.0')}</h1>
                    <form onSubmit={handleSubmit}>
                        {/* ----------------------------------radio-btn-------------------------------------- */}
                        <div className='invitation'>
                            <input type='radio' id="rdo1" className="radio-input" name="radio-group" />
                            <label htmlFor="rdo1" className="radio-label" >
                                <span className="radio-border"></span>
                                {t('formText.1')}
                            </label>
                            <input type='radio' id="rdo2" className="radio-input" name="radio-group" />
                            <label htmlFor="rdo2" className="radio-label" >
                                <span className="radio-border"></span>
                                {t('formText.2')}
                            </label>
                        </div>
                        {/* --------------------------------------------------------------------------------- */}
                        <input type="text" placeholder={t('formText.3')} autoComplete='off' required />
                        <input type="text" placeholder={t('formText.4')} autoComplete='off' required />
                        <button className="button_answer">
                            {t('formText.5')}
                            <div className="button__horizontal"></div>
                            <div className="button__vertical"></div>
                        </button>
                    </form>
                    <div className='hands'>
                        {
                            viewhands &&
                            <div className='image_hands left_hand' ><img src={handLeft} alt="not found" /></div>
                        }
                        <div className='image_heart heart' ><img src={redHeart} alt="not found" /></div>
                        <div className='image_cell'><img src={wedding} alt="not found" /></div>
                        {
                            viewhands &&
                            <div className='image_hands right_hand' ><img src={handRight} alt="not found" /></div>
                        }
                    </div>
                    <h2>~{t('formText.6')}~</h2>
                </div>
            </div>
        </footer>
    )
}

export default memo(Wedding1Footer)