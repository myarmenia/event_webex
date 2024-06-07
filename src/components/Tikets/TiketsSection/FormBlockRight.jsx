import React from 'react';
import { CheckboxChecked, CheckboxNoChecked } from '../../../iconsFolder/icons';
import CustomBtnTikets from '../TicetsCustom/CustomBtnTikets';

const FormBlockRight = ({ defaultImages_place, editStatusTemplate }) => {
   const [chechBox1, setChechBox1] = React.useState(false);
   const [chechBox2, setChechBox2] = React.useState(false);
   const hendleChechBox = (val) => {
      if (val) {
         setChechBox1(true);
         setChechBox2(false);
      } else {
         setChechBox1(false);
         setChechBox2(true);
      }
   };
   return (
      <div style={{ maxWidth: '280px' }}>
         <div className="TiketsSection-blockRight-img">
            <img src={defaultImages_place} alt="" />
            {editStatusTemplate && (
               <div className="iketsSection-blockRight-img-blockPhoneNumger">
                  <p>Your phone number is required for data accuracy</p>
                  <div className="iketsSection-blockRight-img-blockPhoneNumger-div">
                     <input type="text" placeholder="Phone number" />
                     <button className="iketsSection-blockRight-img-blockPhoneNumger-btn">
                        ok
                     </button>
                  </div>
               </div>
            )}
            <p>PLEASE CONFIRM YOUR PRESENCE.</p>
         </div>
         <div className="TiketsSection-blockRight-blockForm">
            <div className="TiketsSection-blockRight-blockForm-name">
               <p>ENTER YOUR AND LAST NAME</p>
               <input type="text" placeholder="Name" />
               <input type="text" placeholder="Surname" />
            </div>
            <div className="TiketsSection-blockRight-blockForm-radio">
               <p>Please confirm your presence </p>
               <div className="TiketsSection-blockRight-blockForm-radio-div">
                  <div onClick={() => hendleChechBox(true)}>
                     {chechBox1 ? <CheckboxChecked /> : <CheckboxNoChecked />}
                     <label>can we come</label>
                  </div>
                  <div onClick={() => hendleChechBox(false)}>
                     {chechBox2 ? <CheckboxChecked /> : <CheckboxNoChecked />}
                     <label>we can't come</label>
                  </div>
               </div>
               <div className="TiketsSection-blockRight-blockForm-btn">
                  <CustomBtnTikets btnText="SEND" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default FormBlockRight;
