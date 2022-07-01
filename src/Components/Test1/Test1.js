import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  saveData,
} from "../../Redux/Slices/counterSlice";
const Test1 = () => {
  const count = useSelector((state) => state.value);
  const user = useSelector((state) => state.user);
  console.log(user);

  const dispatch = useDispatch();
  useEffect(() => {
    const loadData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => dispatch(saveData(data)));
    };

    loadData();
  }, []);
  return (
    <div className=" h-screen m-3 p-2">
      <h1>Test 1 </h1>
      <button
        onClick={() => dispatch(increment())}
        className=" py-2 px-4 text-2xl"
      >
        +
      </button>
      <h1 className=" py-2 px-4 text-2xl">{count}</h1>
      <button
        onClick={() => dispatch(decrement())}
        className=" py-2 px-4 text-2xl"
      >
        -
      </button>

      <div>{user && user?.map((item) => <h1>{item?.name}</h1>)}</div>
    </div>
  );
};

export default Test1;
