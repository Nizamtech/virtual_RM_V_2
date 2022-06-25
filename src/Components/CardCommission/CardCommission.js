import React, { useState } from "react";
import Select from "react-select";
const CardCommission = () => {
  const [cardCommission, setCardCommission] = useState(null);
  const [institute, setInstitute] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [commission, setCommission] = useState(null);
  const cardCommissionData = [
    { value: "Silver", label: "Silver" },
    { value: "Platinum, Dhaka-1230", label: "Platinum" },
    { value: "Gold", label: "Gold" },
    { value: "Classic", label: "Classic" },
  ];
  const numberCount = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];
  const commissionData = [
    { value: "100", label: "100 TK" },
    { value: "200", label: "200 TK" },
    { value: "300", label: "300 TK" },
    { value: "400", label: "400 TK" },
    { value: "500", label: "500 TK" },
    { value: "600", label: "600 TK" },
  ];
  return (
    <div className=" h-screen p-3 my-3">
      <div className="w-full mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Institute Name
        </label>
        <Select
          required
          name="profession"
          onChange={setCardCommission}
          options={cardCommissionData}
          className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <div className=" grid md:grid-cols-4  gap-4 place-content-center my-4 ">
        <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Card Type
          </label>
          <Select
            required
            name="profession"
            onChange={setCardCommission}
            options={cardCommissionData}
            className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
        <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            From
          </label>
          <Select
            required
            name="profession"
            onChange={setFrom}
            options={numberCount}
            className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
        <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            To
          </label>
          <Select
            required
            name="profession"
            onChange={setTo}
            options={numberCount}
            className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
        <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          <label> Commission</label>
          <input
            required
            type="text"
            name="name"
            // onChange={handleChange}
            placeholder="BDT"
            className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
          />
        </div>
      </div>
    </div>
  );
};

export default CardCommission;
