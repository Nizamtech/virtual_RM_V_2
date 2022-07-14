import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Router, useLocation, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
import EditCardCommission from "./EditCardCommission";

const EditCardCommissionList = () => {
  const { id } = useParams();
  const router = useNavigate();

  const [error, setError] = useState(false);
  const [cardCommissionData, setCardCommissionData] = useState([]);
  const [cardType, setCardType] = useState([]);
  const [institute, setInstitute] = useState(cardCommissionData?.bank_name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      card_type: [...cardType],
      bank_name: institute || cardCommissionData?.bank_name,
    };
    console.log(data);
    // if (institute?.value) {
    //   setError(false);

    await axios
      .put(`http://127.0.0.1:8000/api/card_commission/${id}/`, data)
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          SuccessAlert("Successfully Update", "success");
          router(-1);
        } else SuccessAlert("Something Wrong", "error");
      });
    // } else setError(true);
  };
  console.log(institute);
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
          className=" bg-sky-500 py-2 px-8 rounded-[15px] text-white  mt-3 text-[18px]"
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
