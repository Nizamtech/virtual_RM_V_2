import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const initialState = {
  value: 0,
  user: [],
  commission: [],
  addM: [],
  isLoaDing: true,
  inputList: [{ product_type: "", from: 0, commission: 0, to: 0 }],
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

    specialCommission: (state, action) => {
      state.commission = action.payload;
    },
    addMoreFn: (state, action) => {
      console.log("from redux", action.payload);
      state.addM = [...state.addM, action.payload];
    },
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    isLoaDing: (state, action) => {
      state.isLoaDing = action.payload;
    },
    inputChange: (state, action) => {
      const { name, value, index } = action.payload;

      const list = [...state.inputList];
      if (name !== "product_type") {
        list[index][name] = parseInt(value);
      } else {
        list[index][name] = value;
      }
      state.inputList = list;
    },

    AddClick: (state, action) => {
      state.inputList = [
        ...state.inputList,
        { product_type: "", from: 0, commission: 0, to: 0 },
      ];
    },
    RemoveClick: (state, action) => {
      const { index } = action.payload;
      const list = [...state.inputList];
      list.splice(index, 1);
      state.inputList = list;
    },

    // const handleRemoveClick = (index) => {
    //   const list = [...inputList];
    //   list.splice(index, 1);
    //   setInputList(list);
    //   dispatch(specialCommission(list));
    // };
  },
});

// Action creators are generated for each case reducer function
export const {
  RemoveClick,
  AddClick,
  inputChange,
  isLoaDing,
  increment,
  decrement,
  incrementByAmount,
  saveUser,
  specialCommission,
  addMoreFn,
} = userSlice.actions;

export default userSlice.reducer;
