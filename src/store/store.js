import { configureStore } from '@reduxjs/toolkit';
import musicModalSlice from './slices/MusicModalSlice/MusicModalSlice';
import changeInfoSlice from './slices/ChangeInfoSlice/ChangeInfoSlice';
import linkModalSlice from './slices/LinkModalSlice/LinkModalSlice';
import privateProjectSlice from './slices/privateProjectSlice/privateProjectSlice';
import getProjectSlice from './slices/GetProjectSlice/GetProjectSlice';
import weeding1ResultMessageSlice from './slices/Wedding1ResultMessageSlice/Wedding1ResultMessageSlice';


const store = configureStore({
   reducer: {
      musicModal: musicModalSlice.reducer,
      changeInfo: changeInfoSlice.reducer,
      linkModal: linkModalSlice.reducer,
      privateProject: privateProjectSlice.reducer,
      projectData: getProjectSlice.reducer,
      wedding1ResultMessage: weeding1ResultMessageSlice.reducer
   },
  
});

export default store;
