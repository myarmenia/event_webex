import React from 'react';

import CustomBtnTikets from '../TicetsCustom/CustomBtnTikets';
const SectionDescript = ({ textArea_plesholder, editStatusTemplate }) => {
   return (
      <div className="TiketsSection-blockLeft-blockDescript">
         <h3>INVITATION</h3>
         {editStatusTemplate ? (
            <textarea className="TiketsSection-blockDescript-textarea"></textarea>
         ) : (
            <p className="TiketsSection-blockDescript-defaulttext">{textArea_plesholder}</p>
         )}

         <div>
            {editStatusTemplate ? (
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
                        />
                        <button>Ok</button>
                     </div>
                  </div>
               </div>
            ) : (
               <CustomBtnTikets btnText="ROUTE" />
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
