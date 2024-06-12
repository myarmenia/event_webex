import { configureStore } from '@reduxjs/toolkit';
import musicModalSlice from './slices/MusicModalSlice/MusicModalSlice';
import changeInfoSlice from './slices/ChangeInfoSlice/ChangeInfoSlice';
import linkModalSlice from './slices/LinkModalSlice/LinkModalSlice';
import privateProjectSlice from './slices/privateProjectSlice/privateProjectSlice';
import { tiketsReducer } from './slices/Tikets/tiketsSlice';
import promNightSlice from './slices/promNight/PromNightSlice';

const store = configureStore({
   reducer: {
      musicModal: musicModalSlice.reducer,
      changeInfo: changeInfoSlice.reducer,
      linkModal: linkModalSlice.reducer,
      privateProject: privateProjectSlice.reducer,
      tikets: tiketsReducer,
      promNight: promNightSlice.reducer
   },
});

export default store;
