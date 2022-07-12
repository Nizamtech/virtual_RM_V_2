import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";

const LoanCommissionTable = () => {
  const [cardType, setCardType] = useState(null);
  const [institute, setInstitute] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [commission, setCommission] = useState(null);
  const handleChange = (e) => {
    setCommission(e.target.value);
  };

  const cardCommissionData = [
    { value: "personal Load", label: "Personal Load" },
    { value: "car load", label: "Car Load" },
    { value: "Home Loan", label: "HomeLoan" },
    { value: "Credit Card", label: "Credit Card" },
  ];

  return (
    <div className=" overflow-x-auto  sm:rounded-lg  mt-3 h-screen ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 min-w-full">
        <thead className="text-xs  uppercase bg-slate-800 text-white dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              Product Type
            </th>
            <th scope="col" className="px-6 py-3">
              From
            </th>
            <th scope="col" className="px-6 py-3">
              To
            </th>
            <th scope="col" className="px-6 py-3">
              Commission
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td
              scope="row"
              className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 "
            >
              <Select
                required
                name="profession"
                onChange={setCardType}
                options={cardCommissionData}
                className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
              />
            </td>
            <td
              scope="row"
              className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
            >
              <input
                required
                type="text"
                name="name"
                maxLength={4}
                max="3000"
                onChange={handleChange}
                placeholder="BDT"
                className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
              />
            </td>
            <td
              scope="row"
              className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
            >
              <input
                required
                type="text"
                name="name"
                maxLength={4}
                max="3000"
                onChange={handleChange}
                placeholder="BDT"
                className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
              />
            </td>
            <td
              scope="row"
              className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
            >
              <input
                required
                type="text"
                name="name"
                maxLength={4}
                max="3000"
                onChange={handleChange}
                placeholder="Per Lac BDT"
                className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className=" bg-green-400  hover:shadow-2xl rounded py-2 px-4 text-white mt-4 float-right ">
        SAVE
      </button>
    </div>
  );
};

export default LoanCommissionTable;
