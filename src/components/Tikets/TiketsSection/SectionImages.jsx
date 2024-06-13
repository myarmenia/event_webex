import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePromNight_imgs_section_2 } from '../../../store/slices/Tikets/tiketsSlice';
import { convertToBase64 } from '../../../utils/helperFunck';
import OneImage from './OneImage';

const SectionImages = ({ defaultImagesList, item }) => {

   return (
      <div className="TiketsSection-blockLeft-blockImg">
         
         {defaultImagesList.map((el, idx) => (
            <OneImage key={idx} el={el} />
         ))}
      </div>
   );
};

export default SectionImages;
