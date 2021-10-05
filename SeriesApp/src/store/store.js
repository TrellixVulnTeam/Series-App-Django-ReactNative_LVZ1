import { configureStore } from '@reduxjs/toolkit';
import reducersReducer from './counterslice';
import postReducers from './postslice';
import seriesReducers from './serieslice';

export default configureStore ({
    reducer:{
        login_reducer: reducersReducer,
        post_serie_reducer: postReducers,
        series:seriesReducers
    },
})