import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../../axios";

export const getTarifData = createAsyncThunk(
    'gettariffData/getTarifData', async (_, thunkAPI) => {
      try {
        const config = {
          method: 'get',
          url: 'tariffs',
        };
  
        const response = await instance(config);
       
        console.log(response.data, 'resp.data');
        return response.data;
      } catch (error) {
        console.log(error, 'error');
        return thunkAPI.rejectWithValue(error.response.data);
      }
    },
  );
  