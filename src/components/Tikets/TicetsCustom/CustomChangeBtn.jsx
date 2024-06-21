import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePromNight, changePromNightSelector, promNightInfoSelector, viewPromNight } from '../../../store/slices/promNight/PromNightSlice';

function CustomChangeBtn() {
    const allInfoPromNight = useSelector(promNightInfoSelector)
    const changeInfoState = useSelector(changePromNightSelector);
    const dispatch = useDispatch();
    

    
    const editTemplateBtn = () => {
        // setLangModal(true);
        dispatch(changePromNight())
    
      }

      const handleButtonClick = () => {
        // dispatch(changeInfo(allInfo));
        dispatch(viewPromNight());
      };

    return (
        <>
          {changeInfoState === 'view' && <button className='fixed_button_prom_night_edit' onClick={editTemplateBtn}>Edit Template</button>}
          {changeInfoState === 'edit' && <button className='fixed_button_prom_night_edit'>View</button>}
          {allInfoPromNight.date  !== ""  &&  allInfoPromNight.feedback !== "" && <button  className='fixed_button_prom_night_send'>Send</button>}
      </>
      );
}

export default CustomChangeBtn