import { createSlice } from "@reduxjs/toolkit";
import { postWeeding1ResultMessage } from "./Wedding1ResultMessageApi";


const weeding1ResultMessageSlice = createSlice ({
    name: 'wedding1ResultMessage',
    initialState: {
        result: {},
        loading:'pending'
    },
    reducers: {
       
    },

    extraReducers: (builder) => {
        builder
        .addCase(postWeeding1ResultMessage.pending, (state, action) => {
             state.result = action.payload
             state.loading = 'pending'
        })
        .addCase(postWeeding1ResultMessage.fulfilled, (state, action) => {
             state.result = action.payload
             state.loading = 'fulfilled'
        })
        .addCase(postWeeding1ResultMessage.rejected, (state, action) => {
             state.result = action.payload
             state.loading = 'rejected'
        })
    }
});

export const {  } = weeding1ResultMessageSlice.actions;

export const wedding1ResultMessageLoading = (state) => state.wedding1ResultMessage.loading;

export const wedding1ResultMessageSelector = (state) => state.wedding1ResultMessage.result;

export default weeding1ResultMessageSlice;
