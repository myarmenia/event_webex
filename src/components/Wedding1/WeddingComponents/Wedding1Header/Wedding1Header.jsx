import React, { memo, useEffect, useState } from 'react';
import './Wedding1Header.css';
import Timer from '../../../timer/Timer';
import { down } from '../../../../iconsFolder/icons';
import { bouqetAnimation, female, headerBackground, male } from '../../../../images/images';
import { useTranslation } from 'react-i18next';
import WeddIng1Music from '../Wedding1Music/WeddIng1Music';
import { useSelector, useDispatch } from 'react-redux';
import { changeInfo, allInfoSelector, changeInfoSelector } from '../../../../store/slices/ChangeInfoSlice/ChangeInfoSlice';
import { useDebounce } from '../../../../hooks/hooks';

function Wedding1Header() {
  const [display, setDisplay] = useState(false);
  const { t, i18n } = useTranslation();
  const changeInfoState = useSelector(changeInfoSelector); 
  const allInfo = useSelector(allInfoSelector);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({ nameBoy: '', nameGirl: '' });

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 500);
  }, []);

  useEffect(() => {
    setInputs(allInfo);
  }, [allInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const debouncedInputs = useDebounce(inputs, 500); 

  useEffect(() => {
    if (inputs !== allInfo) {
      dispatch(changeInfo(debouncedInputs));
    }
  }, [debouncedInputs, dispatch]);

  return (
    <header style={{ backgroundImage: `url(${headerBackground})` }}>
      <div className='container'>
        <div className='header'>
          <div className='header_content'>
            <WeddIng1Music />
            <h1>{t('headertitle')}</h1>
            <div className='name_logo'>
              {display && (
                <div className='couple couple_male'>
                  <img src={male} alt="not found" />
                </div>
              )}
              {display && (
                <div className='couple_name'>
                  <img src={bouqetAnimation} alt="not found" />
                  {changeInfoState === 'edit' ? (
                    <input
                      className='male'
                      name="nameBoy"
                      type="text"
                      placeholder='Փեսացու'
                      value={inputs.nameBoy}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span className='male'>{allInfo.nameBoy || t('couple.0')}</span>
                  )}
                  {changeInfoState === 'edit' ? (
                    <input
                      className='female'
                      name="nameGirl"
                      type="text"
                      placeholder='Հարսնացու'
                      value={inputs.nameGirl}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <span className='female'>{allInfo.nameGirl || t('couple.1')}</span>
                  )}
                </div>
              )}
              {display && (
                <div className='couple couple_female'>
                  <img src={female} alt="not found" />
                </div>
              )}
            </div>
            <Timer />
            <span className='down'>{down}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default memo(Wedding1Header);
