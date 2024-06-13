import React, { memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { footerBackground, handLeft, handRight, redHeart, wedding } from '../../../../images/images';
import './Wedding1Footer.css';
import { allInfoSelector, changeFeedback, changeInfoSelector, changeInfoWatsUp } from '../../../../store/slices/ChangeInfoSlice/ChangeInfoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { privateProjectSelector } from '../../../../store/slices/privateProjectSlice/privateProjectSlice';
import * as yup from 'yup';
import { Formik } from 'formik';
import { postWeeding1ResultMessage } from '../../../../store/slices/Wedding1ResultMessageSlice/Wedding1ResultMessageApi';
import { customBasesUrlFunc } from '../../../../utils/helperFunck';
import { wedding1ResultMessageSelector } from '../../../../store/slices/Wedding1ResultMessageSlice/Wedding1ResultMessageSlice';

function Wedding1Footer() {
    const [requiredGuest, setRequiredGuest] = useState(false);
    const [activeMessage, setActiveMessage] = useState('');
    const respMessageResult = useSelector(wedding1ResultMessageSelector)
    const validationSchema = yup.object({
        radioGroup: yup.string().required('This input is required'),
        textinput1: yup.string().required('This input is required'),
        textinput2: requiredGuest ? yup.string().required('This input is required') : yup.string()
    });

    const { t, i18n } = useTranslation();
    const footerRef = useRef(null);
    const [viewhands, setViewHands] = useState(false);
    const [wutsUpNumber, setWutsUpNumber] = useState('');
    const changeInfoState = useSelector(changeInfoSelector);
    const dispatch = useDispatch();
    const handleSendMessage = (e, handleSubmit, isValid, values) => {
        e.preventDefault();
        handleSubmit();
       values.radioGroup === '1' ? setRequiredGuest(true) : setRequiredGuest(false); 
        const params = customBasesUrlFunc()
        const message = {
            token: params?.token,
            visit: values.radioGroup,
            guest_name: values.textinput1,
            guest_quantity: values.textinput2
        }


        
        if (values.radioGroup === '1' ? (values.radioGroup && values.textinput1 && values.textinput2 && isValid && params.token) : (values.radioGroup && values.textinput1  && params.token)) {
            dispatch(postWeeding1ResultMessage(message))
            
        }
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


    useEffect(() => {
        setActiveMessage(true)
        setTimeout(() => {
          setActiveMessage(false)
        }, 4000);
        
      }, [respMessageResult])


    return (
        <footer style={{ backgroundImage: `url(${footerBackground})` }} ref={footerRef}>
            <div className='container'>
                <div className='footer'>
                    {changeInfoState === 'edit' && <div className='wats_up_number_div'>
                        <h1>{t('watsUpNumberTitle')}</h1>
                        <input type="text" value={wutsUpNumber} placeholder='Համար' onChange={(e) => setWutsUpNumber(e.target.value.split('').filter(char => /^[0-9+\(\)]$/.test(char)).join(''))} />
                    </div>}
                    <h1>{t('formText.0')}</h1>
                    <Formik
                        initialValues={{
                            radioGroup: '',
                            textinput1: '',
                            textinput2: ''
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { resetForm }) => {
                            // console.log('Form values:', values);
                            resetForm();
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                            <form onSubmit={(e) => handleSendMessage( e, handleSubmit, isValid, values)}>
                                {/* ----------------------------------radio-btn-------------------------------------- */}
                                <div className='invitation'>
                                    <input type='radio' 
                                    id="rdo1" 
                                    className="radio-input" 
                                    name="radioGroup" 
                                    value="1" 
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    checked={values.radioGroup === "1"} />
                                    <label htmlFor="rdo1" className="radio-label">
                                        <span className="radio-border"></span>
                                        {t('formText.1')}
                                    </label>
                                    <input type='radio'
                                       id="rdo2" 
                                       className="radio-input"
                                       name="radioGroup" 
                                       value="0" 
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       checked={values.radioGroup === "0"}
                                    />
                                    <label htmlFor="rdo2" className="radio-label">
                                        <span className="radio-border"></span>
                                        {t('formText.2')}
                                    </label>
                                    {touched.radioGroup && errors.radioGroup && <p className="wedding1_error">{errors.radioGroup}</p>}

                                </div>
                                {/* --------------------------------------------------------------------------------- */}
                                <input
                                    type="text"
                                    placeholder={t('formText.3')}
                                    autoComplete='off'
                                    name="textinput1"
                                    onChange={handleChange}
                                    value={values.textinput1}
                                    onBlur={handleBlur}
                                />
                                {touched.textinput1 && errors.textinput1 && <p className="wedding1_error">{errors.textinput1}</p>}


                                <input
                                    type="text"
                                    placeholder={t('formText.4')}
                                    autoComplete='off'
                                    name="textinput2"
                                    onChange={handleChange}
                                    value={values.textinput2}
                                    onBlur={handleBlur}
                                />
                                {touched.textinput2 && errors.textinput2 && <p className="wedding1_error">{errors.textinput2}</p>}


                                <button type="submit" className="button_answer">
                                    {t('formText.5')}
                                    <div className="button__horizontal"></div>
                                    <div className="button__vertical"></div>
                                </button>
                                { activeMessage && respMessageResult?.success && <p style={{color: 'green'}}>{respMessageResult?.message}</p>}
                            </form>
                        )}
                    </Formik>
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