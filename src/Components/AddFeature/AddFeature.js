import React, { useEffect, useState } from "react";
import Select from "react-select";
import TextEditor from "./TextEditor";

const AddFeature = () => {
  const [inst, setInst] = useState([]);
  const [bank, setBank] = useState("");

  useEffect(() => {
    fetch("https://admin.aamartaka.com/api/v1/institutes/")
      .then((response) => response.json())
      .then((json) => setInst(json.results));
  }, []);

  let options = inst?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });

  console.log(bank);

  return (
    <div className=" h-screen m-3 p3 ">
      <form action="">
        <div className="w-full mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Bank Name
          </label>
          <Select
            required
            name="bank_name"
            onChange={setBank}
            options={options}
            className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
          />
        </div>

        <div>
          <TextEditor />
        </div>
      </form>
    </div>
  );
};

export default AddFeature;
