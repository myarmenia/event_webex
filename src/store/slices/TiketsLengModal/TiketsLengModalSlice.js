import { createSlice } from "@reduxjs/toolkit";


const tiketsLengModalSlice = createSlice ({
    name: 'tiketsLengModal',
    initialState: {
        isOpen: false,
        type:''
    },
    reducers: {
        openModalTiketsLeng(state, action) {
            state.isOpen = true;
            state.type = action.payload
        },
        closeModalTiketsLeng(state) {
            state.isOpen = false;
        },
    },
});

export const { openModalTiketsLeng, closeModalTiketsLeng } = tiketsLengModalSlice.actions;

export const tiketsLengModalSelector = (state) => state.tiketsLengModal.isOpen;
export const tiketsLengModalSelectorType = (state) => state.tiketsLengModal.type;

export default tiketsLengModalSlice;
