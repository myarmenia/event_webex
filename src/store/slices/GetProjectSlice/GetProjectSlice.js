import { createSlice } from "@reduxjs/toolkit";
import { getProject } from "./GetProjectApi";

const initialState = {
    data: {},
    status: 'idle',
    error: null,
    loading: 'idle',
};

const getProjectSlice = createSlice({
    name: 'projectData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProject.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(getProject.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = 'idle';
            })
            .addCase(getProject.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = 'idle';
            });
    },
});

export const selectProjectData = (state) => state.projectData.data;
export const selectProjectLoading = (state) => state.projectData.loading;

export default getProjectSlice;
