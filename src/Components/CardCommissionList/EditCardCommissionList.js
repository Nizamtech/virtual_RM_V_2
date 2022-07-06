import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Router, useNavigate } from "react-router-dom";
import Select from "react-select";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
import EditCardCommission from "./EditCardCommission";

const EditCardCommissionList = () => {
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
      bank_name: institute?.value,
    };
    console.log(data);
    // if (institute?.value) {
    //   setError(false);
    //   await axios
    //     .post("http://127.0.0.1:8000/api/card_commission/", data)
    //     .then((result) => {
    //       if (result?.status === 201) {
    //         SuccessAlert("Successfully Added", "success");
    //         router("/cclist");
    //       } else SuccessAlert("Something Wrong", "error");
    //     });
    // } else setError(true);
  };
  console.log(inputList);
  return (
    <div className="h-screen  overflow-scroll p-3 my-3 ">
      <EditCardCommission
        institute={institute}
        setInstitute={setInstitute}
        inputList={inputList}
        setInputList={setInputList}
        error={error}
      />

      <div className=" flex justify-between items-center ">
        <input
          onClick={handleSubmit}
          className=" bg-sky-500 py-1 px-8 rounded-[15px] text-white  mt-3 "
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

export default EditCardCommissionList;
