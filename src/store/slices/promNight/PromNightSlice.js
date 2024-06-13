// import { createSlice } from "@reduxjs/toolkit";


// const promNightSlice = createSlice({
//     name: 'promNight',
//     initialState: {
//         isChange: 'view',
//         allInfo: {
//             date: '',  
//             feedback: '',

//             section_1_time: '',

//             section_2_text: '',
//             section_2_addressLink: '',
//             section_2_images: [],

//             section_3_text: '',
//             section_3_images: []

//         }
//     },
//     reducers: {

//         changePromNight(state) {
//             state.isChange = 'edit';
//         },
//         viewPromNight(state) {
//             state.isChange = 'view';
//         },
       
//         changePromNightDate(state, action) {
//             state.allInfo.date = action.payload;
//         },
//         changePromNightFeedback(state, action) {
//             state.allInfo.feedback = action.payload;
//         },

//         changePromNightTime(state, action) {
//             state.allInfo.section_1_time = action.payload;
//         },

//         changePromNightText(state, action) {
//             state.allInfo.section_2_text = action.payload;
//         },

//         changePromNightAddressLink(state, action) {
//             state.allInfo.section_2_addressLink = action.payload;
//         },
//         changePromNight_imgs_section_2(state, action) {
//             state.allInfo.section_2_images.push(action.payload);
//         },
//         changePromNightText(state, action) {
//             state.allInfo.section_3_text = action.payload;
//         },
//         changePromNight_imgs_section_3(state, action) {
//             state.allInfo.section_3_images.push(action.payload);
//         },

//     },
// });


// export const changePromNightSelector = (state) => state.promNight.isChange;
// export const promNightInfoSelector = (state) => state.promNight.allInfo;

// export const { 
//     changePromNightDate,
//     changePromNightFeedback,
//     changePromNightTime,
//     changePromNightText,
//     changePromNightAddressLink,
//     changePromNight_imgs_section_2,
//     changePromNight_imgs_section_3 ,
//     changePromNight,
//     viewPromNight
// } = promNightSlice.actions;
// export default promNightSlice;