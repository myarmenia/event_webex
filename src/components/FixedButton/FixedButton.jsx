import React, { useState } from 'react';
import './FixedButton.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeInfoSelector, view, changeInfo, allInfoSelector, change } from '../../store/slices/ChangeInfoSlice/ChangeInfoSlice';
import { postPrivateProject } from '../../store/slices/privateProjectSlice/privateProjectApi';
import { open } from '../../store/slices/MusicModalSlice/MusicModalSlice';
import { selectProjectData } from '../../store/slices/GetProjectSlice/GetProjectSlice';
import { useTranslation } from 'react-i18next';

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

  const privateProject = () => {
    if (allInfo.feedBack !== '' && allInfo.date !== '') {
        const resultObj = {
            template_id: '1',
            template_route: '/wedding1',
            date: allInfo.date,
            sound_path: allInfo.music_path,
            feedback: allInfo.feedback,
            invitation_name: allInfo.nameBoy + '-' + allInfo.nameGirl,
            sections: [
                {
                    section_number: 1,
                    ...(allInfo.nameBoy && { name_1: allInfo.nameBoy }),
                    ...(allInfo.nameGirl && { name_2: allInfo.nameGirl })
                },

                {   
                    section_number: 2,
                    ...(allInfo.eventTime && { time: allInfo.eventTime }),
                    ...(allInfo.eventText && { text: allInfo.eventText }),
                    ...(allInfo.eventAddres && { address: allInfo.eventAddres }),
                    ...(allInfo.event_addres_link && { address_link: allInfo.event_addres_link }),
                    ...(allInfo.event_imgs.length > 0 && { images: allInfo.event_imgs })
                },

                {
                    section_number: 3,
                    ...(allInfo.churchesTime && { time: allInfo.churchesTime }),
                    ...(allInfo.chrchesText && { text: allInfo.chrchesText }),
                    ...(allInfo.chrchesAddres && { address: allInfo.chrchesAddres }),
                    ...(allInfo.churches_addres_link && { address_link: allInfo.churches_addres_link }),
                    ...(allInfo.churches_imgs.length > 0 && { images: allInfo.churches_imgs })
                },

                {
                    section_number: 4,
                    ...(allInfo.registryTime && { time: allInfo.registryTime }),
                    ...(allInfo.registryText && { text: allInfo.registryText }),
                    ...(allInfo.registryAddres && { address: allInfo.registryAddres }),
                    ...(allInfo.registry_addres_link && { address_link: allInfo.registry_addres_link }),
                    ...(allInfo.registry_imgs.length > 0 && { images: allInfo.registry_imgs })
                },

                {
                    section_number: 5,
                    ...(allInfo.banquetTime && { time: allInfo.banquetTime }),
                    ...(allInfo.banquetText && { text: allInfo.banquetText }),
                    ...(allInfo.banquetAddres && { address: allInfo.banquetAddres }),
                    ...(allInfo.banquet_addres_link && { address_link: allInfo.banquet_addres_link }),
                    ...(allInfo.banquet_imgs.length > 0 && { images: allInfo.banquet_imgs })
                }
            ].filter(item => Object.keys(item).length !== 1),
              

        }
        
      dispatch(postPrivateProject(resultObj)).then((res) => {
       if (res.payload.data) {
         window.location.href = res.payload.data.redirect_url
       }
      })
      
    }
  }


  const editTemplateBtn = () => {
    console.log(count,'ff666');
   if(count === 1){
    setLangModal(!lengModal)
   }
    dispatch(change())

  }
  

  return (
    <>
      {(!respProjectData.data.success) && changeInfoState === 'view' && <button className='fixed_button' onClick={editTemplateBtn} >{t('wedding1_buttons.0')}</button>}
      {changeInfoState === 'edit' && <button className='fixed_button'onClick={handleButtonClick}>{t('wedding1_buttons.1')}</button>}
      {allInfo.date  !== ""  &&  allInfo.feedback !== "" && <button  className='fixed_button_2' onClick={privateProject}>{t('wedding1_buttons.2')}</button>}
  </>
  );
}

export default FixedButton;
