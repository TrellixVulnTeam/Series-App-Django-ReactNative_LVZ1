import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: "",
  password:"",
  confirm_password:"",
  email:"",
  token:null,
  new_app:null
}

export const reducersPayload = createSlice({
    name: 'reducers',
    initialState,
    reducers: {
      OnchangeUsername: (state, action) => {
        state.username = action.payload;
      },
      OnchangePassword: (state, action) => {
        state.password = action.payload;
      },
      OnchangeConfirmPassword: (state, action) => {
        state.confirm_password = action.payload;
      },
      OnchangeEmail: (state, action) => {
        state.email = action.payload;
      },
      TokenSet: (state, action) => {
        state.token = action.payload;
      },
      NewAppSet: (state, action) => {
        state.new_app = action.payload;
      },
      reset: () => initialState
    },
})

// Action creators are generated for each case reducer function
export const { OnchangeUsername, OnchangePassword, OnchangeConfirmPassword, OnchangeEmail, TokenSet, NewAppSet, reset } = reducersPayload.actions;

export default reducersPayload.reducer;
