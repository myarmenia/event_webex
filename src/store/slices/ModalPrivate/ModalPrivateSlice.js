import { createSlice } from "@reduxjs/toolkit";


const modalPrivateSlice = createSlice ({
    name: 'modalPrivate',
    initialState: {
        isOpen: false,
        type:''
    },
    reducers: {
        openModalPrivate(state, action) {
            state.isOpen = true;
            state.type = action.payload
        },
        closeModalPrivate(state) {
            state.isOpen = false;
        },
    },
});

export const { closeModalPrivate, openModalPrivate } = modalPrivateSlice.actions;

export const modalPrivateSelector = (state) => state.modalPrivate.isOpen;
export const modalPrivateSelectorType = (state) => state.modalPrivate.type;

export default modalPrivateSlice;
