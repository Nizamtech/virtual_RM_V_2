import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const initialState = {
  value: 0,
  user: [],
  commission: [],
  addMoreData: [],
  isLoaDing: true,
  commissionData: [],
  inputList: [{ product_type: "", from: 0, commission: 0, to: 0 }],
  cardtype: [],
  cardList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action.payload);
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
      state.addMoreData = [...state.addMoreData, action.payload];
    },
    saveUser: (state, action) => {
      state.isLoaDing = true;
      const user = sessionStorage.getItem("aamartaka");
      state.user = JSON.parse(user);
      console.log("calling me", user);
      if (user) {
        state.isLoaDing = false;
      }

      // const user = JSON.parse(sessionStorage.getItem("aamartaka"));
      // state.user = action.payload;
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

    addMoreFuncton: (state, action) => {
      console.log(action.payload);
      // state.commissionData = action.payload;
    },
    cardList: (state, action) => {
      state.cardList = action.payload;
    },

    cardType: (state, action) => {
      let config = {
        headers: {
          Authorization: `token ${`e298b9a8a78ff698f088cf7ff0c46771e969bf2b`}`,
        },
      };
      const id = action.payload;
      console.log(id);

      const loadData = async () => {
        const data = await axios.get(
          `https://admin.aamartaka.com/api/v1/credit_card/?institute=${id}`,
          config
        );
        state.cardtype = data?.data?.results;
      };
      loadData();
    },
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
  addMoreFuncton,
  cardType,
  cardList,
} = userSlice.actions;

export default userSlice.reducer;
