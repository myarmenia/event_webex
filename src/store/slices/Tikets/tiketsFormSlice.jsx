import { createSlice } from '@reduxjs/toolkit';
// import { getAuthUserAllMessages, postMessageProfile, postUserMessages} from './NewMessagesSliceApi';
import { defaultImagesList } from '../../../images/TiketsImg/default images';
const initialState = {
   loadingStatus: 'loading',
   modalIsOpen: false,
   statusTemplate: 'view',

   usersData: {
      template_id: 1,
      template_route: '/wedding1',
      invitation_name: 'CLAS 12 A',
      language: 'am',
      date: '2024-05-08',
      feedback: '37499116665',
      logo_path: '',
      sectios: [
         {
            section_name: 'wedding',
            section_number: 1,
            name_1: 'CLAS 12 A',
            name_2: 'Anun2',
            full_name: 'Anun Azganun',
            text: 'Dear teachers and classmates, we invite you to spend our prom together. We will celebrate at the Felice restaurant complex We are waiting with love',
            time: '18:00',
            address: 'Baghramyn 1',
            address_link: '',
            imagees: [...defaultImagesList],
         },
      ],
   },
};

const tiketFormSlice = createSlice({
   name: 'tiketFormSlice',
   initialState,
   reducers: { 
      setStatusTemplate(state, { payload }) {
         state.statusTemplate = payload;
      },
   },
});

export const statusTemplate = (state) => state.statusTemplate;

export const { setStatusTemplate } = tiketFormSlice.actions;
