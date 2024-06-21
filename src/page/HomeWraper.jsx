import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ModalPrivate from '../components/ModalPrivate/ModalPrivate';
import { modalPrivateSelector } from '../store/slices/ModalPrivate/ModalPrivateSlice';
import { useSelector } from 'react-redux';
import LanguageModaalTiket from '../components/Tikets/TicetsCustom/LanguageModalTiket/LanguageModaalTiket';
import { tiketsLengModalSelector } from '../store/slices/TiketsLengModal/TiketsLengModalSlice';

function HomeWraper() {
const modalPrivateProject = useSelector(modalPrivateSelector)
const tiketsLengModal = useSelector(tiketsLengModalSelector)
  
  return (
    <div className="home_wraper">
      <Outlet />
      {modalPrivateProject && <ModalPrivate/>}
      {tiketsLengModal && <LanguageModaalTiket/>}
    </div>
  );

}

export default HomeWraper;
