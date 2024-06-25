import React, { useState } from 'react';
import './FixedButton.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeInfoSelector, view, changeInfo, allInfoSelector, change } from '../../store/slices/ChangeInfoSlice/ChangeInfoSlice';
import { selectProjectData } from '../../store/slices/GetProjectSlice/GetProjectSlice';
import { useTranslation } from 'react-i18next';
import { openModalPrivate } from '../../store/slices/ModalPrivate/ModalPrivateSlice';

function FixedButton({setLangModal, lengModal}) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const changeInfoState = useSelector(changeInfoSelector);
  const respProjectData = useSelector(selectProjectData);
  const allInfo  = useSelector(allInfoSelector);
  const [count, setCount] = useState(1);
  const handleButtonClick = () => {
    setCount(count + 1);
    dispatch(changeInfo(allInfo));
    dispatch(view());
  };




  const editTemplateBtn = () => {
   if(count === 1){
    setLangModal(!lengModal)
   }
    dispatch(change())

  }
  
  console.log(respProjectData, 'changeInfoState');
  return (
    <>
      {(!respProjectData?.success) && changeInfoState === 'view' && <button className='fixed_button' onClick={editTemplateBtn} >{t('wedding1_buttons.0')}</button>}
      {changeInfoState === 'edit' && <button className='fixed_button'onClick={handleButtonClick}>{t('wedding1_buttons.1')}</button>}
      {allInfo.date  !== ""  &&  allInfo.feedback !== "" && <button  className='fixed_button_2' onClick={() => dispatch(openModalPrivate('wedding1'))}>{t('wedding1_buttons.2')}</button>}
  </>
  );
}

export default FixedButton;
