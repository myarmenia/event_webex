import React from 'react';
import { useDispatch } from 'react-redux';
import { setEditStatusTemplate } from '../../../store/slices/Tikets/tiketsSlice';

import CustomBtnTikets2 from '../TicetsCustom/CustomBtnTikets2';
import Timer from '../../timer/Timer';
import {
   wing1,
   wing2,
   wing3,
   wing4,
   backgroundCenterBlock,
   Showa,
   backgroundVideo,
} from '../../../images/TiketsImg';

import { useSelector } from 'react-redux';

const TiketsHeader = () => {
   const dispatch = useDispatch();
   const [headerTitle, setHeaderTitle] = React.useState({ name: 'PROM', lastName: ' NIGHT' });
   const [dataInput, setDataInput] = React.useState(false);
   const { statusTemplate, editStatusTemplate } = useSelector((state) => state.tikets);
   const [open, setOpen] = React.useState(false);

   React.useEffect(() => {
      setTimeout(() => {
         setOpen(true);
      }, 60000);
   }, []);

   return (
      <div className="tiketsHeader">
         <video className="tiketsHeader-background-video" autoPlay muted>
            <source src={'/backgroundVideo.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
         </video>
         <div className="tiketsHeader-blockButton">
            {statusTemplate === 'view' && !editStatusTemplate ? (
               <CustomBtnTikets2
                  handleClick={() => dispatch(setEditStatusTemplate(true))}
                  btnText={'Edit Template '}
                  background="#c93789"
               />
            ) : statusTemplate === 'edit' && editStatusTemplate ? (
               <CustomBtnTikets2 btnText={'view'} background="#c93789" />
            ) : null}

            {/* <CustomBtnTikets2 btnText={'Save '} background="#2CE2E7" /> */}
         </div>
         <div className="tiketsHeader-imgBlockLeft">
            <img src={wing1} alt="" />
         </div>
         <div className="tiketsHeader-imgBlockRight">
            <img src={wing2} alt="" />
         </div>
         <div className="tiketsHeader-imgBlockBottom">
            <img src={wing3} alt="" />
         </div>
         <div style={{ display: open ? '' : 'none' }} className="container">
            <div className="tiketsHeader-blockCenter">
               <div
                  className="tiketsHeader-blockCenter_nameBlock"
                  style={{ backgroundImage: `url(${backgroundCenterBlock})` }}>
                  {/* <img src={backgroundCenterBlock} alt="" /> */}

                  <div className="blockCenter_nameBlock-name">
                     <span className="blockCenter_nameBlock-name-minname">{headerTitle.name}</span>
                     <span className="blockCenter_nameBlock-name-bigName">
                        {headerTitle.lastName}
                     </span>
                  </div>
                  {/* <div className="blockCenter_nameBlock-inptData">
                     <input
                        onChange={(e) => {
                           console.log(e.target.value);
                        }}
                        type="date"
                        // value={'2024-10-12'}
                        placeholder="JUNE 5 18:00"
                        style={{ pointerEvents: dataInput ? '' : 'none' }}
                     />
                  </div> */}
                  <div className="blockCenter_nameBlock-inptData">
                     {editStatusTemplate ? (
                        <input type="date" placeholder="JUNE 5 18:00" />
                     ) : (
                        <p className="nameBlock-inptData-text">06.06.2024 18:00</p>
                     )}
                  </div>
               </div>
               <div className="tiketsHeader-blockCenter_timeBlock">
                  <div style={{ backgroundImage: `url(${Showa})` }}>
                     <Timer liner={false} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TiketsHeader;
