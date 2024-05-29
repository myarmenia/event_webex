import React, { memo } from 'react';
import './Footer_Autors.css';
import { useTranslation } from 'react-i18next';

function Footer_Autors() {

    const { t, i18n } = useTranslation()

    return (
        <div className='footer_autors'>
            <div className='container'>
                <div className='footer_content'>
                    <span className='autors'> 💍 ∞︎︎ {t('autors')}</span>
                    <a href="https://webex.am/am/" target='_blank' className='link'>Webex.am♥</a>
                </div>
            </div>
        </div>
    )
}

export default memo(Footer_Autors)