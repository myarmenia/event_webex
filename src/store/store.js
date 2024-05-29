import { configureStore } from '@reduxjs/toolkit';
import musicModalSlice from './slices/MusicModalSlice/MusicModalSlice';
import changeInfoSlice from './slices/ChangeInfoSlice/ChangeInfoSlice';
import linkModalSlice from './slices/LinkModalSlice/LinkModalSlice';


const store = configureStore({
   reducer: {
      musicModal: musicModalSlice.reducer,
      changeInfo: changeInfoSlice.reducer,
      linkModal: linkModalSlice.reducer
   },
  
});

export default store;
