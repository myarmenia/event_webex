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


function Wedding1() {
  const selectLinkModal = useSelector(linkModalSelector)

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
    <div className='wedding_1'>
        <Wedding1Header/>
        <Wedding1Main/>
        <Wedding1Footer/>
        {selectLinkModal && <Wedding1LinkModal/>}
        <Footer_Autors />
        {langModal && <Language setLangModal={setLangModal}/>}
        {musicModalIsopen && <MusicModal />}
        <FixedButton/>
    </div>
  )
}

export default Wedding1