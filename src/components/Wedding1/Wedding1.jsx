import React, { useEffect, useState } from 'react'
import Wedding1Header from './WeddingComponents/Wedding1Header/Wedding1Header'
import Wedding1Main from './WeddingComponents/Wedding1Main/Wedding1Main'
import Wedding1Footer from './WeddingComponents/Wedding1Footer/Wedding1Footer'
import Wedding1LinkModal from './Wedding1LinkModal/Wedding1LinkModal'
import { useDispatch, useSelector } from 'react-redux'
import { linkModalSelector } from '../../store/slices/LinkModalSlice/LinkModalSlice'
import Language from '../language/Language'
import FixedButton from '../FixedButton/FixedButton'
import MusicModal from '../MusicModal/MusicMoadal'
import Footer_Autors from '../footer_autors/Footer_Autors'
import { musicModalSelector, open } from '../../store/slices/MusicModalSlice/MusicModalSlice'
import { useLocation } from 'react-router-dom'
import { selectProjectData } from '../../store/slices/GetProjectSlice/GetProjectSlice'
import './Wedding1.css'

function Wedding1() {
  const leng = localStorage.getItem('lang') != null ? localStorage.getItem('lang') : 'am';
  console.log(leng, 'lang');

  const selectLinkModal = useSelector(linkModalSelector)

  const [langModal, setLangModal] = useState(false);
  const musicModalIsopen = useSelector(musicModalSelector);
  const respProjectData = useSelector(selectProjectData);
  const dispatch = useDispatch()
  const {pathname} = useLocation()

  // useEffect(() => {
  //   const modalState = localStorage.getItem('langModal');
  //   if (modalState === null) {
  //       setLangModal(true);
  //       localStorage.setItem('langModal', 'true');
    
  //   } else {
  //     setLangModal(modalState === 'true');
  //     dispatch(open())
  //   } 


  //   setTimeout(() => {
  //     localStorage.removeItem('langModal');
      
  //   }, 3000);
  // }, []);

  useEffect(() => {
    if (langModal === false && localStorage.getItem('langModal') === 'false') {
      dispatch(open())
    }


    setTimeout(() => {
      localStorage.removeItem('langModal');
    }, 2000);
  }, [langModal]);


  return (
    <div className='wedding_1'>
        <Wedding1Header/>
        <Wedding1Main/>
        <Wedding1Footer/>
        {(!respProjectData?.data?.success) && selectLinkModal && <Wedding1LinkModal/>}
        <Footer_Autors />
        {langModal && <Language setLangModal={setLangModal}/>}
        {musicModalIsopen && <MusicModal  lengModal={langModal}/>}
        <FixedButton setLangModal={setLangModal} lengModal={langModal}/>
    </div>
  )
} 

export default Wedding1