import { createSlice } from '@reduxjs/toolkit';

export const postReducers = createSlice({
    name:'postreducers',
    initialState:{
      title:"",
      note:"",
      description:"",
      imgUrl:""
    },
    reducers: {
      titleSet: (state, action) => {
        state.title = action.payload;
      },
      noteSet: (state, action) => {
        state.note = action.payload;
      },
      descriptionSet: (state, action) => {
        state.description = action.payload;
      },
      imgUrlSet: (state, action) => {
        state.imgUrl = action.payload;
      },
    },
})

export const { titleSet, noteSet, descriptionSet, imgUrlSet } = postReducers.actions;

export default postReducers.reducer;