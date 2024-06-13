import { createSlice } from '@reduxjs/toolkit';
// import { getAuthUserAllMessages, postMessageProfile, postUserMessages} from './NewMessagesSliceApi';
import { defaultImagesList } from '../../../images/TiketsImg/default images';
import { changePromNight } from '../promNight/PromNightSlice';
const initialState = {
   loadingStatus: 'loading',
   modalIsOpen: false,
   statusTemplate: 'view',
   editStatusTemplate: false,

   defaultData: {

      date: '',
      feedback: '',

      section_1_time: '',

      section_2_text: '',
      section_2_addressLink: '',
      section_2_images: [],

      section_3_text: '',
      section_3_images: []
   }
};

const tiketSlice = createSlice({
   name: 'tiketSlice',
   initialState,
   reducers: {
      setStatusTemplate(state, { payload }) {
         state.statusTemplate = payload;
      },
      setEditStatusTemplate(state, { payload }) {
         state.editStatusTemplate = payload;
         if (payload) {
            state.statusTemplate = 'edit';
         }
      },

      changePromNightDate(state, action) {
         state.defaultData.date = action.payload;
         console.log(action.payload, 'dd');
      },

      // ===========================

      changePromNightTime(state, action) {
         state.defaultData.section_1_time = action.payload;
      },

      changePromNightText2(state, action) {
         state.defaultData.section_2_text = action.payload;
      },

      changePromNightAddressLink(state, action) {
         state.defaultData.section_2_addressLink = action.payload;
      },
      changePromNight_imgs_section_2(state, action) {
         state.defaultData.section_2_images.push(action.payload);
      },
      changePromNightText3(state, action) {
         state.defaultData.section_3_text = action.payload;
      },
      changePromNight_imgs_section_3(state, action) {
         state.defaultData.section_3_images.push(action.payload);
      },
   },
});

export const statusTemplate = (state) => state.statusTemplate;
export const selectDefaultData = (state) => state.tikets.defaultData
export const tiketsReducer = tiketSlice.reducer;
export const { setStatusTemplate, setEditStatusTemplate, changePromNightDate, changePromNightTime, changePromNightAddressLink, changePromNight_imgs_section_2, changePromNight_imgs_section_3, changePromNightText2, changePromNightText3 } = tiketSlice.actions;
