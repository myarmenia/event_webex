import React from 'react';
import Modal from 'react-modal';

const defaultCustomStyles = {
   content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
   },
};

const CustomModal = ({ parentSelector, customStyles, children }) => {
   const [modalIsOpen, setIsOpen] = React.useState(false);

   function openModal() {
      setIsOpen(true);
   }

   function closeModal() {
      setIsOpen(false);
   }

   return (
      <Modal
         isOpen={modalIsOpen}
         style={customStyles || defaultCustomStyles}
         contentLabel="Example Modal"
         parentSelector={parentSelector}>
         {children}
      </Modal>
   );
};

export default CustomModal;
