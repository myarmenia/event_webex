import React from 'react';
import {
   TiketsSectionBackground,
   TiketsSectionBackground2,
   tiketsSectionRigth,
   tiketsSectionLeft,
   defaultImages_place,
} from '../../../images/TiketsImg';
import { defaultImagesList } from '../../../images/TiketsImg/default images';

const textArea_plesholder =
   'Dear teachers and classmates, we invite you to spend our prom together. We will celebrate at the Felice restaurant complex We are waiting with love';

const TiketsSection = () => {
   const [velTextArea, setVelTextArea] = React.useState(false);
   return (
      <div
         className="TiketsSection"
         style={{ backgroundImage: `url(${TiketsSectionBackground2})` }}>
         <div
            className="TiketsSection-contaner"
            style={{ backgroundImage: `url(${TiketsSectionBackground})` }}>
            <div className="TiketsSection-contaner-blockLeft">
               <div className="TiketsSection-blockLeft-blockDescript">
                  <h3>INVITATION</h3>
                  {velTextArea ? (
                     <textarea
                        className="TiketsSection-blockDescript-textarea"
                        placeholder={textArea_plesholder}></textarea>
                  ) : (
                     <p className="TiketsSection-blockDescript-defaulttext">
                        {textArea_plesholder}
                     </p>
                  )}

                  <div>
                     <button>route</button>
                  </div>
                  <input type="text" placeholder="Clas 12 a" />
               </div>
               <div className="TiketsSection-blockLeft-blockImg">
                  {defaultImagesList.map((el, idx) => (
                     <div>
                        <img key={idx} src={el} alt="default img" />
                     </div>
                  ))}
               </div>
            </div>
            <div className="TiketsSection-contaner-blockRight">
               <div className="TiketsSection-blockRight-img">
                  <img src={defaultImages_place} alt="" />
               </div>
               <div className="TiketsSection-blockRight-blockForm"></div>
            </div>
         </div>

         <div className="tiketsSection-imgBlockLeft">
            <img src={tiketsSectionLeft} alt="" />
         </div>
         <div className="tiketsSection-imgBlockRight">
            <img src={tiketsSectionRigth} alt="" />
         </div>
      </div>
   );
};

export default TiketsSection;
