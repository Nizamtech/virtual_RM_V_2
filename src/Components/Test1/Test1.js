import React from "react";
import { useDispatch } from "react-redux";
import { cardType, increment } from "../../Redux/Slices/userSlice";

const Test1 = () => {
  const dispatch = useDispatch();
  return (
    <div className=" h-screen p-3 m-3">
      <h1>Dashboard</h1>
      <button onClick={() => dispatch(cardType(5))}>Load</button>
    </div>
  );
};

export default Test1;
