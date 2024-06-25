import { createSlice } from "@reduxjs/toolkit";
import { getTarifData } from "./TarifDataApi";
const initialState = {
    data: {
        data: [],
    },
    status: 'idle',
    error: null,
    loading: 'pending',
};

const getTariffDataSlice = createSlice({
    name: 'gettariffData',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTarifData.pending, (state) => {
            state.loading = 'pending';
            console.log('pending');
        });
        builder.addCase(getTarifData.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = 'rejected';
            console.log('error');
        });
        builder.addCase(getTarifData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = 'fulfilled';
        })
    },
});

export const selectTariffData = (state) => state.gettariffData.data;
export const selectTariffLoading = (state) => state.gettariffData.loading;

export default getTariffDataSlice.reducer;
