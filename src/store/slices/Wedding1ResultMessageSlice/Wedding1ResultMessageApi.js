import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const postWeeding1ResultMessage = createAsyncThunk(
    'weeding1ResultMessage/postWeeding1ResultMessage',
  
    async (body, thunkAPI) => {
        try {
  
          const config = {
            method: "post",
            url: "client-feedback",
            data: body,
          };
    
          const response = await instance(config);
          return response?.data
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data);
        }
      }
  )