import { createSlice } from "@reduxjs/toolkit";
import { postPrivateProject } from "./privateProjectApi";


const privateProjectSlice = createSlice ({
    name: 'privateProject',
    initialState: {
        result: {},
        loading:'pending'
    },
    reducers: {
       
    },

    extraReducers: (builder) => {
        builder
        .addCase(postPrivateProject.pending, (state, action) => {
             state.result = action.payload
             state.loading = 'pending'
        })
        .addCase(postPrivateProject.fulfilled, (state, action) => {
             state.result = action.payload
             console.log(state.result,'ddd');
             state.loading = 'fulfilled'
        })
        .addCase(postPrivateProject.rejected, (state, action) => {
             state.result = action.payload
             state.loading = 'rejected'
        })
    }
});

export const {  } = privateProjectSlice.actions;

export const privateProjectLoading = (state) => state.privateProject.loading;

export const privateProjectSelector = (state) => state.privateProject.result;

export default privateProjectSlice;
