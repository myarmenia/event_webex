import React, { useEffect } from 'react';
import { CheckboxChecked, CheckboxNoChecked } from '../../../iconsFolder/icons';
import CustomBtnTikets from '../TicetsCustom/CustomBtnTikets';
import OneImage from './OneImage';
import { changePromNight_imgs_section_3, changePromNightFeedback } from '../../../store/slices/Tikets/tiketsSlice';
import { useDispatch } from 'react-redux';

const FormBlockRight = ({ defaultImages_place, editStatusTemplate, item}) => {
   const [chechBox1, setChechBox1] = React.useState(false);
   const [chechBox2, setChechBox2] = React.useState(false);
   const [feedback, setFeedback] = React.useState('');
   const dispatch = useDispatch();
   const hendleChechBox = (val) => {
      if (val) {
         setChechBox1(true);
         setChechBox2(false);
      } else {
         setChechBox1(false);
         setChechBox2(true);
      }
   };

   useEffect(() => {
      dispatch(changePromNightFeedback(feedback));
   }, [dispatch, feedback ]);

   return (
      <div style={{ maxWidth: '280px', marginTop: '20px' }}>
         <div className="TiketsSection-blockRight-img">
            {/* <img src={defaultImages_place} alt="" /> */}
            {item ? item.images.map((img, index) =>(
               <OneImage key={index} el={img} methodDispatch={changePromNight_imgs_section_3}/>
            )) : <img  src={defaultImages_place} alt="img" />}
            {editStatusTemplate && (
               <div className="iketsSection-blockRight-img-blockPhoneNumger">
                  <p>Your phone number is required for data accuracy</p>
                  <div className="iketsSection-blockRight-img-blockPhoneNumger-div">
                     <input type="text" placeholder="Phone number"   onChange={(e) => setFeedback(e.target.value)}/>
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
