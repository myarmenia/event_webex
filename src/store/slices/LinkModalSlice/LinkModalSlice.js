import { createSlice } from "@reduxjs/toolkit";


const linkModalSlice = createSlice ({
    name: 'linkModal',
    initialState: {
        isOpen: false,
        type:''
    },
    reducers: {
        openLinkModal(state, action) {
            state.isOpen = true;
            state.type = action.payload
        },
        closeLinkModal(state) {
            state.isOpen = false;
        },
    },
});

export const { openLinkModal, closeLinkModal } = linkModalSlice.actions;

export const linkModalSelector = (state) => state.linkModal.isOpen;
export const linkModalSelectorType = (state) => state.linkModal.type;

export default linkModalSlice;
