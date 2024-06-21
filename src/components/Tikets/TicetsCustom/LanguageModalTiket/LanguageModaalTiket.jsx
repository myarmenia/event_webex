import React, { useEffect } from 'react'
import './LanguageModaalTiket.css'
import { useDispatch } from 'react-redux'
import { closeModalTiketsLeng } from '../../../../store/slices/TiketsLengModal/TiketsLengModalSlice'
import { useTranslation } from 'react-i18next'
function LanguageModaalTiket() {
    
  const leng = localStorage.getItem('lang')

  const dispatch = useDispatch()

  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const prevLng = localStorage.getItem('lang')
    const pathname = window.location.pathname
    const result = pathname.replace('/' + prevLng, '/' + lng)
    localStorage.setItem('lang', lng)

    window.location.href = result

    dispatch(closeModalTiketsLeng())
    localStorage.setItem('langModalTiket', 'true');
  };


  useEffect(() => {
    if (leng === null) {
      localStorage.setItem('lang', 'am')
    }
  }, [leng])
  return (
    <div className='language_modal_tiket'>
        <div className='language_modaal_tiket_block'>
            <p className='language_modaal_tiket_block_span'>Language</p>
            <h3 className='language_modaal_tiket_block_h3'>Select the language of the invitation card</h3>
            <label onClick={() => changeLanguage('am')}>
                <input type="radio" name="language"/>
                <span>Armenian</span>
            </label>

            <label onClick={() => changeLanguage('ru')}>
                <input type="radio" name="language"/>   
                <span>Russian</span>
            </label>

            <label onClick={() => changeLanguage('en')}>
                <input type="radio" name="language"/>
                <span>English</span>
            </label>
        </div>
    </div>
  )
}

export default LanguageModaalTiket