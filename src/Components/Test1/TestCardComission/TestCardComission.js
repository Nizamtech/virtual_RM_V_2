import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SuccessAlert } from "../../../Shared/Alert/SuccessAlert";

import TestCard from "./TestCard";

const TestCardComission = () => {
  const router = useNavigate();
  const [institute, setInstitute] = useState(null);
  const [error, setError] = useState(false);
  const [inputList, setInputList] = useState([
    { card_type: "", from: 0, commission: 0, to: 0 },
  ]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      card_type: [...inputList],
      bank_name: institute,
    };

    if (institute) {
      setError(false);
      await axios
        .post("http://127.0.0.1:8000/api/card_commission/", data)
        .then((result) => {
          if (result?.status === 201) {
            SuccessAlert("Successfully Added", "success");
            router("/cclist");
          } else SuccessAlert("Something Wrong", "error");
        });
    } else setError(true);
  };

  return (
    <div className="h-screen  overflow-scroll p-3 my-3 ">
      <TestCard
        institute={institute}
        setInstitute={setInstitute}
        inputList={inputList}
        setInputList={setInputList}
        error={error}
      />
      <TestCard
        institute={institute}
        setInstitute={setInstitute}
        inputList={inputList}
        setInputList={setInputList}
        error={error}
      />

      <div className=" flex justify-between items-center ">
        <input
          onClick={handleSubmit}
          className=" bg-sky-500 py-2 px-8 rounded-[15px] text-white  mt-3 text-[18px] "
          type="submit"
          value=" Submit"
        />
        <button
          //   onClick={handleCounter}
          className=" bg-sky-500 py-1 px-8 rounded-[15px] text-white  mt-3 "
        >
          Add More
        </button>
      </div>
    </div>
  );
};

export default TestCardComission;
