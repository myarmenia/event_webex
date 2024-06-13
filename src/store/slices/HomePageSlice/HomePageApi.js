import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const getHomePage = createAsyncThunk(
    'homePage/getHomePage',
  
    async (_, thunkAPI) => {
        try {
  
          const config = {
            method: "Get",
            url: "home",
          };
    
          const response = await instance(config);
          return response?.data
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data);
        }
      }
  )