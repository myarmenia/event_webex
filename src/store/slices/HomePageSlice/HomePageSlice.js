import { createSlice } from "@reduxjs/toolkit";
import { getHomePage, getPromoCode } from "./HomePageApi";


const homePageSlice = createSlice ({
    name: 'homePage',
    initialState: {
        data: {},
        loading:'pending',
        promoCode:''
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

        // ==========================

        .addCase(getPromoCode.pending, (state, action) => {
            state.promoCode = action.payload
      
       })
       .addCase(getPromoCode.fulfilled, (state, action) => {
            state.promoCode = action.payload
          
       })
       .addCase(getPromoCode.rejected, (state, action) => {
            state.promoCode = action.payload
        
       })
    }
});

export const {  } = homePageSlice.actions;

export const homePageLoading = (state) => state.homePage.loading;

export const homePageSelector = (state) => state.homePage.data;

export const selectPromoCode = (state) => state.homePage.promoCode

export default homePageSlice;
