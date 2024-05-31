import { createSlice } from "@reduxjs/toolkit";


const changeInfoSlice = createSlice({
    name: 'changeInfo',
    initialState: {
        isChange: 'view',
        allInfo: {
            nameBoy: '',
            nameGirl: '',

            date: '',
            music_path: '',

            eventTime: '',
            eventText: '',
            eventAddres: '',
            event_addres_link: '',
            event_imgs:[],

            churchesTime: '',
            chrchesText: '',
            chrchesAddres: '',
            churches_addres_link: '',
            churches_imgs:[],

            registryTime: '',
            registryText: '',
            registryAddres: '',
            registry_addres_link: '',
            registry_imgs:[],

            banquetTime: '',
            banquetText: '',
            banquetAddres: '',
            banquet_addres_link: '',
            banquet_imgs:[],

            feedback: '',
        }
    },
    reducers: {
        change(state) {
            state.isChange = 'edit';
        },
        view(state) {
            state.isChange = 'view';
        },

        changeInfo(state, action) {
            state.allInfo.nameBoy = action.payload.nameBoy;
            state.allInfo.nameGirl = action.payload.nameGirl;
        },
        changeInfoDate(state, action) {
            state.allInfo.date = action.payload;
        },

        changeInfoEventTime(state, action) {
            state.allInfo.eventTime = action.payload;
        },

        changeInfoEventText(state, action) {
            state.allInfo.eventText = action.payload;
        },
        changeInfoEventAddres(state, action) {
            state.allInfo.eventAddres = action.payload;
        },

        changeInfoEvent_addres_link(state, action) {
            state.allInfo.event_addres_link = action.payload;
        },  


        changeInfoEvent_imgs(state, action) {
            state.allInfo.event_imgs.push(action.payload);
        },


        // =======================================

        changeInfoChurchTime(state, action) {
            state.allInfo.churchesTime = action.payload;
        },

        changeInfoChrchesText(state, action) {
            state.allInfo.chrchesText = action.payload;
        },

        changeInfoChrchesAddres(state, action) {
            state.allInfo.chrchesAddres = action.payload;
        },


        changeInfoChurch_addres_link(state, action) {
            state.allInfo.churches_addres_link = action.payload;
        },


        changeInfoChurch_imgs(state, action) {  
            state.allInfo.churches_imgs.push(action.payload);
        },


        // ===============================================


        changeInfoRegistryTime(state, action) {
            state.allInfo.registryTime = action.payload;
        },
        changeInfoRegistryText(state, action) {
            state.allInfo.registryText = action.payload;
        },
        changeInfoRegistryAddres(state, action) {
            state.allInfo.registryAddres = action.payload;
        },

        changeInfoRegistry_addres_link(state, action) {
            state.allInfo.registry_addres_link = action.payload;
        },

        changeInfoRegistry_imgs(state, action) {
            state.allInfo.registry_imgs.push(action.payload);
        },

        // ===========================================

        changeInfoBanquetTime(state, action) {
            state.allInfo.banquetTime = action.payload;
        },
        changeInfoBanquetText(state, action) {
            state.allInfo.banquetText = action.payload;
        },
        changeInfoBanquetAddres(state, action) {
            state.allInfo.banquetAddres = action.payload;
        },

        changeInfoBanquet_addres_link(state, action) {
            state.allInfo.banquet_addres_link = action.payload;
        },

        changeInfoBanquet_imgs(state, action) {
            state.allInfo.banquet_imgs.push(action.payload);
            console.log(state.allInfo,'ggg', action.payload);
        },

        // ============================================

        changeFeedback(state, action) {
            state.allInfo.feedback = action.payload;
        },

        // =================================================

        changeMusic(state, action) {
            state.allInfo.music_path = action.payload;
        },

    },
});


export const changeInfoSelector = (state) => state.changeInfo.isChange;
export const allInfoSelector = (state) => state.changeInfo.allInfo;

export const { change,
    view,
    changeInfo,
    changeInfoDate,
    changeInfoEventText,
    changeInfoEventAddres,
    changeInfoEventTime,
    changeInfoChrchesText,
    changeInfoChrchesAddres,
    changeInfoChurchTime,
    changeInfoRegistryText,
    changeInfoRegistryAddres,
    changeInfoRegistryTime,
    changeInfoBanquetText,
    changeInfoBanquetAddres,
    changeInfoBanquetTime,
    changeInfoEvent_addres_link,
    changeInfoChurch_addres_link,
    changeInfoRegistry_addres_link,
    changeInfoBanquet_addres_link,
    changeInfoEvent_imgs,
    changeInfoChurch_imgs,
    changeInfoRegistry_imgs,
    changeInfoBanquet_imgs,
    changeFeedback,
    changeMusic
} = changeInfoSlice.actions;
export default changeInfoSlice;