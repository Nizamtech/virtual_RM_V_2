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
  const [cardCommissionData, setCardCommissionData] = useState([]);
  const [cardType, setCardType] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      card_type: [...cardType],
      bank_name: institute?.value || cardCommissionData?.bank_name,
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

  return (
    <div className="h-screen  overflow-scroll p-3 my-3 ">
      <EditCardCommission
        cardCommissionData={cardCommissionData}
        cardType={cardType}
        setCardType={setCardType}
        setCardCommissionData={setCardCommissionData}
        setInstitute={setInstitute}
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
