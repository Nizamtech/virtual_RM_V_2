import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SuccessAlert } from "../../../Shared/Alert/SuccessAlert";

import TestCard from "./TestCard";

const TestCardComission = () => {
  const router = useNavigate();
  const [institute, setInstitute] = useState(null);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [inputList, setInputList] = useState([
    { product_type: "", from: 0, commission: 0, to: 0 },
  ]);
  const [addMore, setAddMore] = useState([
    { product_type: "", from: 0, commission: 0, to: 0 },
  ]);

  const handleAddMore = () => {
    setAddMore([
      ...addMore,
      { product_type: "", from: 0, commission: 0, to: 0 },
    ]);
  };

  useEffect(() => {
    fetch("https://admin.aamartaka.com/api/v1/institutes/")
      .then((response) => response.json())
      .then((res) => {
        const rest = res.results;
        // const result = rest.filter((item) => item.is_partner === true);
        // console.log(result);
        setData(rest);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      product_type: [...inputList],
      bank_name: institute,
    };

    if (institute) {
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
  };

  console.log(inputList);
  return (
    <div className="h-screen  overflow-scroll p-3 my-3 ">
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
          onChange={(e) => setInstitute(e.target.value)}
        >
          <option>Select</option>
          {data &&
            data.map((item) => (
              <option value={item?.name}>{item?.name}</option>
            ))}
        </select>
        {error && (
          <label className=" text-red-400 my-1">Select Institute</label>
        )}
      </div>
      {addMore &&
        addMore.map((item, index) => (
          <TestCard
            institute={institute}
            setInstitute={setInstitute}
            inputList={inputList}
            setInputList={setInputList}
            error={error}
            item={item}
            addMore={addMore}
            setAddMore={setAddMore}
          />
        ))}

      {/* <TestCard
        institute={institute}
        setInstitute={setInstitute}
        inputList={inputList}
        setInputList={setInputList}
        error={error}
      /> */}

      <div className=" flex justify-between items-center ">
        <input
          onClick={handleSubmit}
          className=" bg-sky-500 py-2 px-8 rounded-[15px] text-white  mt-3 text-[18px] "
          type="submit"
          value=" Submit"
        />
        <button
          onClick={handleAddMore}
          className=" bg-sky-500 py-1 px-8 rounded-[15px] text-white  mt-3 "
        >
          Add More
        </button>
      </div>
    </div>
  );
};

export default TestCardComission;
