import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardCommission from "../CardCommission/CardCommission";
import LoanCommission from "../LoanCommission/LoanCommission";

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
        `http://127.0.0.1:8000/api/agent/register/${id}/`
      );
      setVRMUser(response?.data);
    };
    loadData();
  }, [id]);

  return (
    <div className=" h-screen m-3 p-3 ">
      <div className=" w-full flex justify-between items-center">
        <div className=" mx-2 w-1/2">
          <label className="mt-2">Product Type</label>
          <select
            onClick={handleCommission}
            className="option h-12 p-2 w-full"
            name="name"
          >
            <option>Product Type</option>
            <option value="1">Credit Card</option>
            <option value="2">Loan</option>
          </select>
        </div>
        <div className="mx-2 w-1/2">
          <label className="mt-2">Expire date </label>
          <input
            type="date"
            onChange={handleCommission}
            className=" h-12 p-2 w-full"
            name="expire_date"
          />
        </div>
      </div>

      {commission && commission?.name === "2" && (
        <div>
          <LoanCommission vrmUser={vrmUser} commission={commission} />
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
