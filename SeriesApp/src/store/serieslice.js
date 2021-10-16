import { createSlice } from '@reduxjs/toolkit';

export const seriesReducers = createSlice({
    name: 'reducers',
    initialState: {
      series: [],
      index_detail: undefined,
      item_detail: undefined
    },
    reducers: {
      setSeries: (state, action) => {
        state.series = action.payload;
      },
      setIndex: (state, action) => {
        state.index_detail = action.payload;
      },
      setItem: (state, action) => {
        state.item_detail = action.payload;
      }
    },
})

// Action creators are generated for each case reducer function
export const { setSeries, setIndex, setItem } = seriesReducers.actions;

export default seriesReducers.reducer;