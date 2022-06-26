import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";

import LoanCommissionTable from "./LoanCommissionTable";

const LoanCommission = () => {
  const [institute, setInstitute] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://admin.aamartaka.com/api/v1/institutes/")
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  let options = data?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });
  return (
    <div className=" w-full p-3 my-3">
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
          onChange={setInstitute}
          options={options}
          className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <LoanCommissionTable />
    </div>
  );
};

export default LoanCommission;
