import React, { memo, useEffect } from 'react';
import './Language.css';
import { useTranslation } from 'react-i18next';
import i18n from '../../translatedFolder/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { musicModalSelector, open } from '../../store/slices/MusicModalSlice/MusicModalSlice';


function Language({setLangModal}) {
  const leng = localStorage.getItem('lang')
  const musicModalIsopen = useSelector(musicModalSelector);

  const dispatch = useDispatch()

  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const prevLng = localStorage.getItem('lang')
    const pathname = window.location.pathname
    const result = pathname.replace('/' + prevLng, '/' + lng)
    localStorage.setItem('lang', lng)

    window.location.href = result

      setLangModal(false);
      localStorage.setItem('langModal', 'false');
      dispatch(open())
     
  };


  useEffect(() => {
    if (leng === null) {
      localStorage.setItem('lang', 'am')
    }
  }, [leng])



  return (
    <div className='language-modal'>
      <h1 className='language-title'>{t('leng_modal.1')}</h1>
      <div className='menu_language'>
        <input className='toggle' id='menu' type='checkbox' placeholder='Language' />
        <label className='style' htmlFor='menu'>
          <i className="fa fa-bars" >{t('leng_modal.0')}</i>
        </label>
        <div className='tab'>
          <p id='am' onClick={(e) => changeLanguage(e.target.id)}>Arm</p>
        </div>
        <div className='tab'>
          <p id='ru' onClick={(e) => changeLanguage(e.target.id)}>Ru</p>
        </div>
        <div className='tab'>
          <p id='en' onClick={(e) => changeLanguage(e.target.id)}>Eng</p>
         
        </div>
      </div>
    </div>
  )
}

export default memo(Language)