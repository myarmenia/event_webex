import { configureStore } from '@reduxjs/toolkit';
import musicModalSlice from './slices/MusicModalSlice/MusicModalSlice';
import changeInfoSlice from './slices/ChangeInfoSlice/ChangeInfoSlice';
import linkModalSlice from './slices/LinkModalSlice/LinkModalSlice';
import privateProjectSlice from './slices/privateProjectSlice/privateProjectSlice';
import homePageSlice from './slices/HomePageSlice/HomePageSlice';


const store = configureStore({
   reducer: {
      musicModal: musicModalSlice.reducer,
      changeInfo: changeInfoSlice.reducer,
      linkModal: linkModalSlice.reducer,
      privateProject: privateProjectSlice.reducer,
      homePage: homePageSlice.reducer
   },
  
});

export default store;
