import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Router, useLocation, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
import EditCardCommission from "./EditCardCommission";

const EditCardCommissionList = ({ specialData }) => {
  const { id } = useParams();
  const router = useNavigate();

  const [error, setError] = useState(false);
  const [cardCommissionData, setCardCommissionData] = useState([]);
  const [productTypeData, setProductTypeData] = useState([]);
  const [cardType, setCardType] = useState([]);
  const [institute, setInstitute] = useState(cardCommissionData?.bank_name);
  const [inputList, setInputList] = useState([
    { product_type: "", from: 0, commission: 0, to: 0 },
  ]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;

    // if (institute?.value) {
    //   setError(false);
    let API;
    if (specialData) {
      data = {
        commission: [...cardType],
        bank_name: institute || cardCommissionData?.bank_name,
      };
      API = `api/agent/commission`;
    } else {
      data = {
        product_type: [...cardType],
        bank_name: institute || cardCommissionData?.bank_name,
      };
      API = `api/card_commission`;
    }
    await axios
      .put(`${process.env.REACT_APP_HOST_URL}/${API}/${id}/`, data)
      .then((result) => {
        if (result.status === 200) {
          SuccessAlert("Successfully Update", "success");
          router(-1);
        } else SuccessAlert("Something Wrong", "error");
      });
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
        setInputList={setInputList}
        inputList={inputList}
        productTypeData={productTypeData}
        setProductTypeData={setProductTypeData}
        specialData={specialData}
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
