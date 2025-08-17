import { configureStore } from "@reduxjs/toolkit";
import notesReducer from '../src/redux/noteSlice'
export const store = configureStore({
    reducer: {
        notes: notesReducer,
    },
})