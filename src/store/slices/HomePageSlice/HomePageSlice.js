import { createSlice } from "@reduxjs/toolkit";
import { getHomePage } from "./HomePageApi";


const homePageSlice = createSlice ({
    name: 'homePage',
    initialState: {
        data: {},
        loading:'pending'
    },
    reducers: {
       
    },

    extraReducers: (builder) => {
        builder
        .addCase(getHomePage.pending, (state, action) => {
             state.data = action.payload
             state.loading = 'pending'
        })
        .addCase(getHomePage.fulfilled, (state, action) => {
             state.data = action.payload
             state.loading = 'fulfilled'
        })
        .addCase(getHomePage.rejected, (state, action) => {
             state.data = action.payload
             state.loading = 'rejected'
        })
    }
});

export const {  } = homePageSlice.actions;

export const homePageLoading = (state) => state.homePage.loading;

export const homePageSelector = (state) => state.homePage.data;

export default homePageSlice;
