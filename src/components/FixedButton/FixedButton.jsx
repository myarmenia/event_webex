import React from 'react';
import './FixedButton.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeInfoSelector, view, changeInfo, allInfoSelector, change } from '../../store/slices/ChangeInfoSlice/ChangeInfoSlice';

function FixedButton() {
  const dispatch = useDispatch();
  const changeInfoState = useSelector(changeInfoSelector);

  const allInfo  = useSelector(allInfoSelector);

  const handleButtonClick = () => {
    dispatch(changeInfo(allInfo));
    dispatch(view());
  };

  return (
    <>
      {changeInfoState === 'view' && <button className='fixed_button' onClick={() => dispatch(change())} >edit</button>}
      {changeInfoState === 'edit' && <button className='fixed_button'onClick={handleButtonClick}>View</button>}
      <button style={{top:'300px'}} className='fixed_button' onClick={() => console.log(allInfo,'ff')}>all</button>
  </>
  );
}

export default FixedButton;
