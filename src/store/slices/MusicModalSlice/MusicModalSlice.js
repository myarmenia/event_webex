import { createSlice } from "@reduxjs/toolkit";


const musicModalSlice = createSlice ({
    name: 'musicModal',
    initialState: {
        isOpen: false,
    },
    reducers: {
        open(state) {
            state.isOpen = true;
        },
        close(state) {
            state.isOpen = false;
        },
    },
});

export const { open, close } = musicModalSlice.actions;

export const musicModalSelector = (state) => state.musicModal.isOpen;

export default musicModalSlice;
