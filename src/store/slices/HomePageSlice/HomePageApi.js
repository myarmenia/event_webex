import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const getHomePage = createAsyncThunk(
  'homePage/getHomePage',
  async (categories, thunkAPI) => {
    try {
      // Create the query string based on selected categories
      const queryString = categories.length > 0 
        ? categories.map(id => `category_id[]=${id}`).join('&') 
        : '';

      const config = {
        method: "GET",
        url: `home?${queryString}`,
      };

      const response = await instance(config);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//=============================================


export const getPromoCode = createAsyncThunk(
  'promoCode/getPromoCode',
  async (code, thunkAPI) => {
    try {
      const config = {
        method: "GET",
        url: `check-promo-code?promo_code=${code}`,
      };

      const response = await instance(config);
      return response?.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);