import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const postPrivateProject = createAsyncThunk(
    'privateProject/postPrivateProject',
  
    async (body, thunkAPI) => {
        try {
  
          const config = {
            method: "post",
            url: "form",
            data: body,
          };
    
          const response = await instance(config);
          return response?.data
        } catch (error) {
          return thunkAPI.rejectWithValue(error.response.data);
        }
      }
  )