import { createSlice } from "@reduxjs/toolkit";
import { getProject } from "./GetProjectApi";

const initialState = {
   data: {},
   status: 'idle',
   error: null,
   loading: 'pending'
   };

const getProjectSlice = createSlice({
    name: 'projectData',
    initialState,
    reducers: {
      
    },
 
   
 
    extraReducers: (builder) => {
       builder
          .addCase(getProject.pending, (state) => {
             state.loading = 'pending';
          })
          .addCase(getProject.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = 'fulfilled';
          })
          .addCase(getProject.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = 'rejected';
          });
    },
 });
 

export const selectProjectData = (state) => state.projectData
export const selectProjectLoading = (state) => state.projectData.loading

 export const {} = getProjectSlice.actions

export default   getProjectSlice