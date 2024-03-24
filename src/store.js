import { configureStore } from "@reduxjs/toolkit";
import { calculateReducer } from "./Redux/calculateReducer";

// Configure the Redux store
export const store = configureStore({
    // Define reducers for the store
    reducer: {
        calculateReducer // Add the calculateReducer to the store
    }
});
