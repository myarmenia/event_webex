import React from 'react'
import Wedding1Header from './WeddingComponents/Wedding1Header/Wedding1Header'
import Wedding1Main from './WeddingComponents/Wedding1Main/Wedding1Main'
import Wedding1Footer from './WeddingComponents/Wedding1Footer/Wedding1Footer'
import Wedding1LinkModal from './Wedding1LinkModal/Wedding1LinkModal'
import { useSelector } from 'react-redux'
import { linkModalSelector } from '../../store/slices/LinkModalSlice/LinkModalSlice'


function Wedding1() {
  const selectLinkModal = useSelector(linkModalSelector)
  return (
    <div className='wedding_1'>
        <Wedding1Header/>
        <Wedding1Main/>
        <Wedding1Footer/>
        {selectLinkModal && <Wedding1LinkModal/>}
    </div>
  )
}

export default Wedding1