import React from 'react';
import { useSelector } from 'react-redux';
import {
   TiketsSectionBackground,
   TiketsSectionBackground2,
   tiketsSectionRigth,
   sectionBg2,
   tiketsSectionLeft,
   defaultImages_place,
} from '../../../images/TiketsImg';
import { defaultImagesList } from '../../../images/TiketsImg/default images';
import SectionDescript from './SectionDescript';
import SectionImages from './SectionImages';
import FormBlockRight from './FormBlockRight';
const textArea_plesholder =
   'Dear teachers and classmates, we invite you to spend our prom together. We will celebrate at the Felice restaurant complex We are waiting with love';

const TiketsSection = () => {
   const [velTextArea, setVelTextArea] = React.useState(false);
   const { statusTemplate, editStatusTemplate } = useSelector((state) => state.tikets);
   return (
      <div
         className="TiketsSection"
         style={{ backgroundImage: `url(${TiketsSectionBackground2})` }}>
         <div
            className="TiketsSection-contaner"
            style={{ backgroundImage: `url(${TiketsSectionBackground})` }}>
            <div className="TiketsSection-contaner-blockLeft">
               <SectionDescript
                  textArea_plesholder={textArea_plesholder}
                  editStatusTemplate={editStatusTemplate}
               />
               <SectionImages defaultImagesList={defaultImagesList} />
            </div>

            <div className="TiketsSection-contaner-blockRight">
               <FormBlockRight
                  defaultImages_place={defaultImages_place}
                  editStatusTemplate={editStatusTemplate}
               />
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
