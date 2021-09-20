import { configureStore } from '@reduxjs/toolkit';
import reducersReducer from './counterslice';

export default configureStore ({
    reducer:{
        login_reducer: reducersReducer
    },
})