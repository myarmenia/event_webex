import React from 'react';
import Timer from '../../timer/Timer';
import {
   wing1,
   wing2,
   wing3,
   wing4,
   backgroundCenterBlock,
   Showa,
} from '../../../images/TiketsImg';

const TiketsHeader = () => {
   const [headerTitle, setHeaderTitle] = React.useState({ name: 'PROM', lastName: ' NIGHT' });
   const [dataInput, setDataInput] = React.useState(false);
   return (
      <div className="tiketsHeader">
         <div className="tiketsHeader-blockButton"></div>
         <div className="tiketsHeader-imgBlockLeft">
            <img src={wing1} alt="" />
         </div>
         <div className="tiketsHeader-imgBlockRight">
            <img src={wing2} alt="" />
         </div>
         <div className="tiketsHeader-imgBlockBottom">
            <img src={wing3} alt="" />
         </div>
         <div className="container">
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
                     {dataInput ? (
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
