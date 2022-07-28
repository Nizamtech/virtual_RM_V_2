import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";
import CardCommission from "../CardCommission/CardCommission";
import LoanCommission from "../LoanCommission/LoanCommission";
import LoanCommissionNew from "../LoanCommission/LoanCommissionNew/LoanCommissionNew";

const SpecialCommission = () => {
  const { id } = useParams();
  const [commission, setCommission] = useState({
    name: "",
    expire_date: "",
  });
  const [vrmUser, setVRMUser] = useState([]);
  const handleCommission = (e) => {
    const { name, value } = e.target;

    const newData = { ...commission };
    newData[name] = value;
    setCommission(newData);
  };

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/api/agent/register/${id}/`
      );
      setVRMUser(response?.data);
    };
    loadData();
  }, [id]);

  return (
    <div className=" h-screen m-3 p-3 ">
      <HeadingTitle title="Add Special Commission " />
      <div className=" w-full flex justify-between items-center">
        <div className=" mx-2 w-1/2">
          <label className=" text-lg text-gray-400 my-5">Product Type</label>
          <select
            onClick={handleCommission}
            className="option h-12 p-2 w-full border border-gray-300 mt-5"
            name="name"
          >
            <option>Product Type</option>
            <option value="1">Credit Card</option>
            <option value="2">Loan</option>
          </select>
        </div>
        <div className="mx-2 w-1/2">
          <label className=" text-lg text-gray-400 my-5 ">Expire date </label>
          <input
            type="date"
            onChange={handleCommission}
            className=" h-12 p-2 w-full border border-gray-300 mt-5"
            name="expire_date"
          />
        </div>
      </div>

      {commission && commission?.name === "2" && (
        <div>
          <LoanCommissionNew vrmUser={vrmUser} commission={commission} />
        </div>
      )}
      {commission && commission?.name === "1" && (
        <div>
          <CardCommission vrmUser={vrmUser} commission={commission} />
        </div>
      )}
    </div>
  );
};

export default SpecialCommission;
