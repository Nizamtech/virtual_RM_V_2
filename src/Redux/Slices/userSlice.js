import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const initialState = {
  value: 0,
  user: [],
  commission: [],
  addM: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    specialCommission: (state, action) => {
      state.commission = action.payload;
    },
    addMoreFn: (state, action) => {
      console.log("from redux", action.payload);
      state.addM = [...state.addM, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  saveUser,
  specialCommission,
  addMoreFn,
} = userSlice.actions;

export default userSlice.reducer;
