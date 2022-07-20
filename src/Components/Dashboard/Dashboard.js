import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const data = useSelector((state) => state.reducer);
  console.log("from Dashboard", data);
  return (
    <div className=" h-screen p-3 my-3">
      <h1>This is Dashboard</h1>
    </div>
  );
};

export default Dashboard;
