import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// import "rsuite/styles/index.less";
// import "rsuite/dist/rsuite.min.css";
// import { DateRangePicker, DateRange, Calendar } from "react-date-range";
import { DateRangePicker } from "rsuite";
const LeadListFilter = () => {
  const [vrmAgent, setVrmAgent] = useState(null);
  const [status, setStatus] = useState(null);
  const [productType, setProductType] = useState(null);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const handleSelect = (date) => {
    console.log(date);
  };

  const cardCommissionData = [
    { value: "Silver", label: "Silver" },
    { value: "Platinum, Dhaka-1230", label: "Platinum" },
    { value: "Gold", label: "Gold" },
    { value: "Classic", label: "Classic" },
  ];
  const statusData = [
    { value: "New", label: "New" },
    { value: "CNI", label: "CNI" },
    { value: "Non Eligible", label: "Non Eligible" },
    { value: "Follow Up Needed", label: "Follow Up Needed" },
    { value: "Submitted", label: "Submitted" },
  ];
  const productTypeData = [
    { value: "Personal Load", label: "Personal Load" },
    { value: "Car Loan", label: "Car Loan" },
    { value: "Home Loan", label: "Home Loan" },
    { value: "Credit Cart", label: "Credit Cart" },
  ];
  return (
    <div className=" grid grid-cols-12 place-content-center  ">
      <div className=" col-span-11">
        <div className=" grid grid-cols-6 gap-3 place-content-center place-items-center my-2 p-2 ">
          <div className="w-full">
            <h1 className=" ml-1 my-1 text-lg">VRM Agent</h1>
            <Select
              required
              name="vrmAgent"
              onChange={setVrmAgent}
              options={cardCommissionData}
              className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full">
            <h1 className=" ml-1 my-1 text-lg">Status</h1>
            <Select
              required
              name="vrmAgent"
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
              onChange={setStatus}
              options={statusData}
              className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full">
            <h1 className=" ml-1 my-1 text-lg">Mobile </h1>
            <input
              placeholder=" Mobile Number"
              type="text"
              maxLength={11}
              className="py-2 px-2  w-full border border-gray-300  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full">
            <h1 className=" ml-1 my-1 text-lg">Date </h1>
            <Select
              required
              name="vrmAgent"
              onChange={setStatus}
              options={statusData}
              className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
        </div>
      </div>
      <div className=" col-span-1 mt-12">
        <h1 className=" bg-green-400 py-[10px] px-10 rounded-lg text-white font-bold">
          Go
        </h1>
      </div>
    </div>
  );
};

export default LeadListFilter;
