import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { allInfoSelector, changeInfoDate, changeInfoSelector } from '../../../store/slices/ChangeInfoSlice/ChangeInfoSlice';
import { useDispatch, useSelector } from 'react-redux';

function Wedding1Date() {
    const { t } = useTranslation();
    const changeInfoState = useSelector(changeInfoSelector); 
    const allInfo = useSelector(allInfoSelector);
    const [wedding1Date, setWedding1Date] = useState(allInfo.date)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(changeInfoDate(wedding1Date));
    }, [wedding1Date, dispatch]);


  return (
    <div className='wedding1_date'>
        <h1>{t('maintitle')}</h1>
      {
       changeInfoState === 'edit' ? <input type="date" value={allInfo?.date} className='date_inp' onChange={(e) => setWedding1Date(e.target.value)}/> :  <div className='data'>
          <span>{allInfo &&allInfo?.date.split('-')[2]}</span>
          <div></div>
          <span>{allInfo && allInfo?.date.split('-')[1]}</span>
          <div></div>
          <span>{allInfo && allInfo?.date.split('-')[0]}</span>
        </div>
      }
    </div>
  )
}

export default Wedding1Date