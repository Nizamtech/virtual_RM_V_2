import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Router, useNavigate } from "react-router-dom";
import Select from "react-select";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";
import CardCommissionTest from "./CardCommissionTest/CardCommissionTest";

const CardCommission = ({ vrmUser, commission }) => {
  const router = useNavigate();
  const [institute, setInstitute] = useState(null);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [bankName, setBankName] = useState("");
  const [inputList, setInputList] = useState([
    { product_type: "", from: 0, commission: 0, to: 0 },
  ]);

  console.log(institute);
  useEffect(() => {
    fetch("https://admin.aamartaka.com/api/v1/loans/institutes/")
      .then((response) => response.json())
      .then((res) => {
        const data = res?.filter((item) => item?.is_partner === true);
        // const rest = res.results;
        // const result = rest.filter((item) => item.is_partner === true);
        // console.log(result);
        setData(data);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      product_type: [...inputList],
      bank_name: bankName,
    };
    if (vrmUser?.id) {
      console.log("innnn");

      // data.expire_date = commission?.expire_date;
      const newData = {
        expire_date: commission?.expire_date,
        agent: vrmUser?.id,
        bank_name: bankName,
        product: commission?.name,
        commission: [...inputList],
      };

      console.log(vrmUser?.id, newData);
      if (bankName) {
        await axios
          .post(
            `${process.env.REACT_APP_HOST_URL}/api/agent/commission/`,
            newData
          )
          .then((result) => {
            if (result.status === 201) {
              SuccessAlert("Successfully Added", "success");
              router("/specialcommissionList");
            }
          });
      } else setError(true);
    } else {
      console.log("out");

      if (bankName) {
        setError(false);
        await axios
          .post(`${process.env.REACT_APP_HOST_URL}/api/card_commission/`, data)
          .then((result) => {
            if (result?.status === 201) {
              SuccessAlert("Successfully Added", "success");
              router("/cclist");
            } else SuccessAlert("Something Wrong", "error");
          });
      } else setError(true);
    }
  };
  const handleInstitute = (e) => {
    const { name, value } = e.target;
    setInstitute(value);
  };

  return (
    <div className="h-screen  overflow-scroll p-3 my-3 ">
      <HeadingTitle title="Add Card  Commission" />
      <div className="w-full mb-6 md:mb-0  ">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Institute Name
        </label>

        <select
          className="w-full my-2 border-gray-300 rounded h-10 p-2"
          name="institite"
          onChange={handleInstitute}
        >
          <option>Select</option>
          {data &&
            data.map((item) => <option value={item?.id}>{item?.name}</option>)}
        </select>
        {error && (
          <label className=" text-red-400 my-1">Select Institute</label>
        )}
      </div>

      <CardCommissionTest
        institute={institute}
        setInstitute={setInstitute}
        inputList={inputList}
        setInputList={setInputList}
        error={error}
        setBankName={setBankName}
      />

      <div className=" flex justify-between items-center ">
        <input
          onClick={handleSubmit}
          className=" bg-sky-500 py-2 px-8 rounded-[15px] text-white  mt-3 text-[18px] "
          type="submit"
          value=" Submit"
        />
        {/* <button
          onClick={handleCounter}
          className=" bg-sky-500 py-1 px-8 rounded-[15px] text-white  mt-3 "
        >
          Add More
        </button> */}
      </div>
    </div>
  );
};

export default CardCommission;
