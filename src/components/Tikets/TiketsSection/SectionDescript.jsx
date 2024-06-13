import React, { useEffect, useState } from 'react';

import CustomBtnTikets from '../TicetsCustom/CustomBtnTikets';
import { changePromNightAddressLink, changePromNightText2, selectDefaultData } from '../../../store/slices/Tikets/tiketsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { sectiosData } from '../../../dataFolder/data';
const SectionDescript = ({ textArea_plesholder, editStatusTemplate, item }) => {
   const [linkModal, setLinkModal] = useState(false);
   const allInfoPromNight = useSelector(selectDefaultData);
   const [description, setDescription] = useState(allInfoPromNight.section_2_text);
   const [addressLink, setAddressLink] = useState(allInfoPromNight.address_link);
   const dispatch = useDispatch();

   const handleRouteClick = () => {
     !sectiosData.sections && setLinkModal(true);

   };

   const handleRouteClose = () => {
      dispatch(changePromNightAddressLink(addressLink))
      setLinkModal(false);
   };

   useEffect(() => {
      dispatch(changePromNightText2(description))
   }, [description]);

   console.log(item, 'item');
   return (
      <div className="TiketsSection-blockLeft-blockDescript">
         <h3>INVITATION</h3>
         {editStatusTemplate ? (
            <textarea className="TiketsSection-blockDescript-textarea" value={allInfoPromNight.section_2_text || item?.text || textArea_plesholder} onChange={(e) => setDescription(e.target.value)}></textarea>
         ) : (
            <p className="TiketsSection-blockDescript-defaulttext">{allInfoPromNight.section_2_text || item?.text || textArea_plesholder}</p>
         )}

         <div>
            {linkModal && editStatusTemplate  ? (
               <div className="TiketsSection-blockDescript-parLovation">
                  <p className="TiketsSection-blockDescript-parLovation-p">ROUTE</p>
                  <div className="TiketsSection-blockDescript-parLovation-inputBlock">
                     <p>
                        in order for the data to be accurate, it is necessary to find the address
                        from google map, take the link and insert it in the given field
                     </p>
                     <div>
                        <input
                           type="text"
                           placeholder="https://www.google.com/maps/search/restoran+erevanum/@40.1792743,44.5252079,12z/data=!3m1!4b1?entry=ttu"
                           onChange={(e) => setAddressLink(e.target.value)}
                        />
                        <button onClick={handleRouteClose}>Ok</button>
                     </div>
                  </div>
               </div>
            ) : (
               <a href={item?.address_link || 'https://yandex.by/maps/157/minsk/?ll=27.555691%2C53.902735&mode=routes&rtext=&rtt=comparison&z=12'} target='_blank' onClick={handleRouteClick}>
                  <CustomBtnTikets btnText="ROUTE"/>
               </a>
               
            )}
         </div>
         {editStatusTemplate ? (
            <input className="TiketsSection-blockDescript-input" type="text" placeholder="Name" />
         ) : (
            <p className="TiketsSection-blockDescript-defaultName">CLAS 12 A</p>
         )}
      </div>
   );
};

export default SectionDescript;
