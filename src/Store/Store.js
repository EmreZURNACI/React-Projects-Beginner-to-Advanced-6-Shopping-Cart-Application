import { configureStore } from "@reduxjs/toolkit";
import SepetReducer from './SepetSlice';
export const store = configureStore({
    reducer: {
        sepet: SepetReducer
    }
});