import { configureStore } from '@reduxjs/toolkit';
import musicModalSlice from './slices/MusicModalSlice/MusicModalSlice';
import changeInfoSlice from './slices/ChangeInfoSlice/ChangeInfoSlice';
import linkModalSlice from './slices/LinkModalSlice/LinkModalSlice';
import privateProjectSlice from './slices/privateProjectSlice/privateProjectSlice';
import homePageSlice from './slices/HomePageSlice/HomePageSlice';
import { tiketsReducer } from './slices/Tikets/tiketsSlice';
import getProjectSlice from './slices/GetProjectSlice/GetProjectSlice';
import weeding1ResultMessageSlice from './slices/Wedding1ResultMessageSlice/Wedding1ResultMessageSlice';
import modalPrivateSlice from './slices/ModalPrivate/ModalPrivateSlice';
import tiketsLengModalSlice from './slices/TiketsLengModal/TiketsLengModalSlice';
import birthDaySlice from "./slices/BirthDaySlice/BirthDaySlice";
import getTariffDataSlice from "./slices/TarifData/TarifDataSlice";



const store = configureStore({
   reducer: {
      musicModal: musicModalSlice.reducer,
      changeInfo: changeInfoSlice.reducer,
      linkModal: linkModalSlice.reducer,
      privateProject: privateProjectSlice.reducer,
      homePage: homePageSlice.reducer,
      tikets: tiketsReducer,
      projectData: getProjectSlice.reducer,
      wedding1ResultMessage: weeding1ResultMessageSlice.reducer,
      modalPrivate: modalPrivateSlice.reducer,
      tiketsLengModal: tiketsLengModalSlice.reducer,
      birthDay: birthDaySlice.reducer,
      gettariffData: getTariffDataSlice,
   },
});

export default store;