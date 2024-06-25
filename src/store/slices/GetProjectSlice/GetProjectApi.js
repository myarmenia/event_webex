import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const getProject = createAsyncThunk(
    'notification/getNotification',
    async (token, thunkAPI) => {
      try {
        const config = {
          method: 'get',
          url: `event-result?token=${token}`,
        };
  
        const response = await instance(config);
        
        localStorage.setItem('lang', response.data.data.lang);
        // if (window.location.pathname !== `/${response.data.data.lang}/wedding1/`) {
        //   window.location.pathname = `/${response.data.data.lang}/wedding1/`;
        // }
        console.log(response.data, 'lang');
        return response?.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    },
  );
  