import React, { memo, useEffect, useState } from 'react';
import './Timer.css';
import { useTranslation } from 'react-i18next';
import { allInfoSelector } from '../../store/slices/ChangeInfoSlice/ChangeInfoSlice';
import { useSelector } from 'react-redux';

function Timer() {
  const { t } = useTranslation();
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(0);
  const allInfo = useSelector(allInfoSelector);

  // Parse date parts from allInfo
  const allInfoyear = allInfo.date.split('-')[0];
  const allInfomonth = allInfo.date.split('-')[1];
  const allInfoday = allInfo.date.split('-')[2];


  useEffect(() => {
    // let timer
    const targetDate = new Date(allInfoyear, allInfomonth - 1, allInfoday, 31, 17, 0, 0).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const remainingTime = targetDate - now;

      if (remainingTime <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      setDay(days);
      setHour(hours);
      setMin(minutes);
      setSec(seconds);
    };

    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [allInfoyear, allInfomonth, allInfoday]);

  return (
    <div className='timer'>
      <h1>{t('timer.0')}</h1>
      <div className='timer_content'>
        <div className='time'>
          <span>{day}</span>
          <span>{t('timer.1')}</span>
        </div>
        <div className='time_border'></div>
        <div className='time'>
          <span>{hour}</span>
          <span>{t('timer.2')}</span>
        </div>
        <div className='time_border'></div>
        <div className='time'>
          <span>{min}</span>
          <span>{t('timer.3')}</span>
        </div>
        <div className='time_border'></div>
        <div className='time'>
          <span>{sec}</span>
          <span>{t('timer.4')}</span>
        </div>
      </div>
    </div>
  );
}

export default memo(Timer);
