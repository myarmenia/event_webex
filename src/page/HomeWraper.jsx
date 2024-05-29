import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer_Autors from '../components/footer_autors/Footer_Autors';
import Language from '../components/language/Language';
import MusicMoadal from '../components/MusicModal/MusicMoadal';
import { useDispatch, useSelector } from 'react-redux';
import { musicModalSelector, open } from '../store/slices/MusicModalSlice/MusicModalSlice';
import FixedButton from '../components/FixedButton/FixedButton';

function HomeWraper() {
  const [langModal, setLangModal] = useState(false);
  const musicModalIsopen = useSelector(musicModalSelector);
  const dispatch = useDispatch()

  useEffect(() => {
    const modalState = localStorage.getItem('langModal');
    if (modalState === null) {
      setLangModal(true);
      localStorage.setItem('langModal', 'true');
      
    } else {
      setLangModal(modalState === 'true');
      dispatch(open())
    } 


    setTimeout(() => {
      localStorage.removeItem('langModal');
      
    }, 3000);
  }, []);

  return (
    <div className="home_wraper">
      <Outlet />
      <Footer_Autors />
      {langModal && <Language setLangModal={setLangModal}/>}
      {musicModalIsopen && <MusicMoadal />}
      <FixedButton/>
    </div>
  );
}

export default HomeWraper;
