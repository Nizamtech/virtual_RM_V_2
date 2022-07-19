import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadInstitutes } from "../../Redux/Slices/userSlice";

const Dashboard = () => {
  const [ins, setIns] = useState([]);
  let data = [];
  useEffect(() => {
    const getData = async (api) => {
      let repo = await axios.get(
        `https://admin.aamartaka.com/api/v1/institutes/?page=${api}`
      );
      data.push(repo?.data?.results);
      // setIns([...ins, repo?.data?.results]);
    };

    for (let index = 1; index < 5; index++) {
      getData(index);
    }
    setIns(data);
  }, []);

  console.log("data", ins);
  return (
    <div className=" h-screen p-3 my-3">
      <h1>This is Dashboard</h1>
    </div>
  );
};

export default Dashboard;
