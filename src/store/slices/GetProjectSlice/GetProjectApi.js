import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const getProject = createAsyncThunk(
    'notification/getNotification',
    async (token, thunkAPI) => {
      try {
        const config = {
          method: 'get',
          url: `https://backend.invitationcard.webex.am/api/event-result?${token}`,
        };
  
        const response = await instance(config);
        return response?.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    },
  );
  