import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Router, useLocation, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
import TestForm2 from "../Test2/TestForm2";
import EditCardCommission from "./EditCardCommission";

const EditCardCommissionList = ({ status, specialData }) => {
  const { id } = useParams();
  const router = useNavigate();
  const [testData, setTestData] = useState({});
  const [expireDate, setExpireDate] = useState("");
  const [d, setD] = useState([]);
  const [error, setError] = useState(false);
  const [cardCommissionData, setCardCommissionData] = useState([]);
  const [productTypeData, setProductTypeData] = useState([]);
  const [cardType, setCardType] = useState([]);
  const [institute, setInstitute] = useState(cardCommissionData?.bank_name);
  const [inputList, setInputList] = useState([
    { product_type: "", from: 0, commission: 0, to: 0 },
  ]);

  const handleData = () => {
    setD([...d, testData?.cardComission]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;

    // if (d.length > 0) {
    //   const ddd = d.filter((item) => item);
    //   console.log(ddd);
    // }
    // const data = {
    //   commission: [...d, testData?.cardComission],
    //   // bank_name: institute || cardCommissionData?.bank_name,
    // };
    // console.log(data);

    if (institute || cardCommissionData?.bank_name) {
      setError(false);
      let API;
      let ddd = {};
      if (d.length > 0) {
        ddd = d.filter((item) => item);
      }
      if (specialData) {
        data = {
          commission: [...cardType, ...ddd, testData?.cardComission],
          bank_name: institute || cardCommissionData?.bank_name,
        };
        API = `api/agent/commission`;
      } else {
        const d = [...cardType];
        let e;
        let f;
        if (ddd) {
          e = d.concat(ddd);
        }
        if (testData?.cardComission) {
          f = e.concat(testData?.cardComission);
        }
        data = {
          product_type: f,
          bank_name: institute || cardCommissionData?.bank_name,
        };
        API = `api/card_commission`;
      }
      console.log("akdfjakfj", data);
      await axios
        .put(`${process.env.REACT_APP_HOST_URL}/${API}/${id}/`, data)
        .then((result) => {
          if (result.status === 200) {
            SuccessAlert("Successfully Update", "success");
            router(-1);
          } else SuccessAlert("Something Wrong", "error");
        });
    } else setError(true);
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
        setExpireDate={setExpireDate}
        status={status}
      />
      <TestForm2 setTestData={setTestData} handleData={handleData} />
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
