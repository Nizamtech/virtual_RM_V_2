import { createSlice } from "@reduxjs/toolkit";
// import { useState } from "react";
// const [counter,setCounter]=useState(0)
const initialState = {
  value: 0,
  cart: [],
  user: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value <= 0) {
        state.value = 0;
      } else state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    saveData: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveData, increment, decrement, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
