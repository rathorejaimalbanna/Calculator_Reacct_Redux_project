import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the calculator
const INITIAL_STATE = {
    num: "",         // Current input number as string
    result: 0,       // Result of calculation
    operator: "",    // Current operator (+, -, x, /, %)
    value: ""        // Previous value for calculation
};

// Create a slice for the calculator functionality
const calculateSlice = createSlice({
    name: "calculate",
    initialState: INITIAL_STATE,
    reducers: {
        // Action to handle user input
        input: (state, action) => {
            state.num += action.payload;   // Append input to current number
            state.value += action.payload; // Append input to value for calculation
        },
        // Action to handle arithmetic operation
        operate: (state, action) => {
            state.num += action.payload;   // Append operator to current number
            // Perform calculation based on previous operator
            if (state.operator === "x") {
                state.result = Number(state.value) * state.result;
            } else if (state.operator === "%") {
                state.result = state.result % Number(state.value);
            } else if (state.operator === "/") {
                state.result = state.result / Number(state.value);
            } else if (state.operator === "-") {
                state.result = state.result - Number(state.value);
            } else {
                state.result = state.result + Number(state.value);
            }
            state.value = "";   // Reset value for next input
            state.operator = action.payload; // Update operator
        },
        // Action to clear calculator state
        ac: (state) => {
            state.num = "";
            state.operator = "";
            state.value = "";
            state.result = 0;
        },
        // Action to perform calculation when equals button is pressed
        equals: (state) => {
            // Perform calculation based on previous operator
            if (state.operator === "x") {
                state.result = Number(state.value) * state.result;
            } else if (state.operator === "%") {
                state.result = state.result / 100;
            } else if (state.operator === "/") {
                state.result = state.result / Number(state.value);
            } else if (state.operator === "-") {
                state.result = state.result - Number(state.value);
            } else {
                state.result = state.result + Number(state.value);
            }
            state.operator = "";  // Reset operator
            state.value = "";     // Reset value
            state.num = String(state.result); // Update current input to result
        },
        // Action to delete the last character from the input
        back: (state) => {
            state.num = state.num.slice(0, -1); // Remove last character from current input
            state.value = state.value.slice(0, -1); // Remove last character from value for calculation
        }
    }
});

// Export reducer, actions, and selectors
export const calculateReducer = calculateSlice.reducer;
export const calculateActions = calculateSlice.actions;
export const calculateSelectors = (state) => state.calculateReducer;
