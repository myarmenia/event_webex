import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Header, Section, ContentModal } from './index';
import CustomModal from './TicetsCustom/CustomModal';

import { setStatusTemplate } from '../../store/slices/Tikets/tiketsSlice';

import './tikets.css';

const customStyles = {
   content: {
      top: '20%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
   },
};

const Tikets = () => {
   const { key } = useParams();
   const dispatch = useDispatch();
   const modalContainerRef = useRef(null);
   const [isModalContainerReady, setModalContainerReady] = useState(false);

   useEffect(() => {
      dispatch(setStatusTemplate(key));
   }, [key, dispatch]);

   useEffect(() => {
      if (modalContainerRef.current) {
         setModalContainerReady(true);
      }
   }, []);

   const { t, i18n } = useTranslation();
   return (
      <div>
         <div>
            <Header />
            <div>
               <Section />
            </div>
            <div ref={modalContainerRef} className="Tikets-modalBlock">
               {isModalContainerReady && (
                  <CustomModal
                     parentSelector={() => modalContainerRef.current}
                     customStyles={customStyles}>
                     <ContentModal />
                  </CustomModal>
               )}
            </div>
         </div>
      </div>
   );
};

export default React.memo(Tikets);
