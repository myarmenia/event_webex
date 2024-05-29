import React, { useState } from 'react'
import './Wedding1LinkModal.css'
import { useDispatch, useSelector } from 'react-redux'
import { closeLinkModal, linkModalSelectorType } from '../../../store/slices/LinkModalSlice/LinkModalSlice'
import { allInfoSelector, changeInfoBanquet_addres_link, changeInfoChurch_addres_link, changeInfoEvent_addres_link, changeInfoRegistry_addres_link } from '../../../store/slices/ChangeInfoSlice/ChangeInfoSlice'

function Wedding1LinkModal() {
    const [link, setLink] = useState('')
    const allInfo = useSelector(allInfoSelector)
    const linkType = useSelector(linkModalSelectorType)
    const dispatch = useDispatch()

    const handleClick = () => {
        if (linkType === 'event') {
            dispatch(changeInfoEvent_addres_link(link))  
            dispatch(closeLinkModal())
        }
        else if (linkType === 'church') {
        dispatch(changeInfoChurch_addres_link(link))
        dispatch(closeLinkModal())
        }
        else if (linkType === 'registry') {
            dispatch(changeInfoRegistry_addres_link(link))
            dispatch(closeLinkModal())
        }
        else if (linkType === 'banquet') {
            dispatch(changeInfoBanquet_addres_link(link))
            dispatch(closeLinkModal())

        }
    }

    
  return (
    <div className='wedding1LinkModal'>
        <div className='wedding1_link_modal_block'>
            <h1>Այստեղ պետք է տեղադրեք ձեր միջոցառման անցկացման վայրի հասցեի հղումը</h1>
            <input type="text" placeholder='https://yandex.com' value={link} onChange={(e)=>setLink(e.target.value)}/>
            <button onClick={handleClick}>Հաստատել</button>
        </div>
    </div>
  )
}

export default Wedding1LinkModal