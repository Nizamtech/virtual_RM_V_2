import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import RangeCalender from "./RangeCalender";

// import { DateRangePicker, DateRange, Calendar } from "react-date-range";

const LeadListFilter = ({
  setVrmAgent,
  setStatus,
  setProductType,
  setBank,
  handleFilter,
  setandSign,
  setMobile,
  vrmID,
  handleReset,
  value,
  onChange,
}) => {
  const [ins, setIns] = useState([]);
  const [vrmAgentData, setVrmAgentData] = useState([]);

  const handleSelect = (e) => {
    console.log(e.tartget.value);
    setandSign(e.value);
  };

  useEffect(() => {
    const laodIns = () => {
      fetch("https://admin.aamartaka.com/api/v1/loans/institutes/")
        .then((response) => response.json())
        .then((res) => {
          // const rest = res.results;
          const result = res.filter((item) => item.is_partner === true);
          // console.log(result);
          setIns(result);
        });
    };
    const loadVRMAgent = () => {
      fetch(`${process.env.REACT_APP_HOST_URL}/api/agent/register/`)
        .then((response) => response.json())
        .then((data) => setVrmAgentData(data?.results));
    };
    loadVRMAgent();
    laodIns();
  }, []);

  const statusData = [
    { label: "Select", value: "" },
    { label: "New", value: "New" },
    { label: "CNI", value: "CNI" },
    { label: "Non Eligible", value: "Non Eligible" },
    { label: "Follow", value: "Follow" },
    { value: "Submitted", label: "Submitted" },
  ];
  const productTypeData = [
    { value: 1, label: "Credit Card" },
    { value: 2, label: "Personal Loan" },
    { value: 3, label: "Home Loan" },
    { value: 4, label: "Car Loan" },
    { value: 4, label: "Land Loan" },
  ];

  const option = ins?.map((item) => {
    return { value: item.name, label: item.name };
  });
  const option2 = vrmAgentData?.map((item) => {
    return { value: item.id, label: item?.first_name + item?.last_name };
  });

  return (
    <div>
      <div>
        <div
          className={`grid ${
            vrmID ? "grid-cols-6" : "grid-cols-7"
          }  gap-3 place-content-center place-items-center my-2 p-2 w-full`}
        >
          {!vrmID && (
            <div className="w-full">
              <h1 className=" ml-1 my-1 text-lg">VRM Agent</h1>
              <Select
                required
                name="vrmAgent"
                // onClick={handleSelect}
                onChange={setVrmAgent}
                options={option2}
                className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          )}
          <div className="w-full">
            <h1 className=" ml-1 my-1 text-lg">Status</h1>
            <Select
              required
              name="vrmAgent"
              // onClick={handleSelect}
              onChange={setStatus}
              options={statusData}
              className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full">
            <h1 className=" ml-1 my-1 text-lg">Product Type</h1>
            <Select
              required
              name="vrmAgent"
              // onClick={handleSelect}
              onChange={setProductType}
              options={productTypeData}
              className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full">
            <h1 className=" ml-1 my-1 text-lg">Bank Type</h1>
            <Select
              required
              name="vrmAgent"
              // onClick={handleSelect}
              onChange={setBank}
              options={option}
              className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full">
            <h1 className=" ml-1 my-1 text-lg">Mobile </h1>
            <input
              onBlur={(e) => setMobile(e.target.value)}
              placeholder=" Mobile Number"
              type="text"
              maxLength={11}
              className="py-2 px-2  w-full border border-gray-300  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full ">
            <h1 className=" ml-1 my-1 text-lg">Date </h1>

            <RangeCalender value={value} onChange={onChange} />
          </div>
          <div className="flex justify-between items-center">
            <button onClick={handleFilter} className="mt-8 ml-2">
              <h1 className=" bg-green-400 py-[10px] px-5 rounded-lg text-white font-bold">
                Go
              </h1>
            </button>
            <button onClick={handleReset} className="mt-8 ml-1">
              <h1 className=" bg-red-400 py-[10px] px-3 rounded-lg text-white font-bold">
                Reset
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadListFilter;
