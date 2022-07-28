import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SuccessAlert } from "../../../Shared/Alert/SuccessAlert";
import EditLoanCommissionCard from "./EditLoanCommissionCard";

const EditLoanCommissionNew = ({ status, specialData }) => {
  const { id } = useParams();
  const [loanCommission, setLoanCommission] = useState([]);
  let navigate = useNavigate();
  const [inst, setInst] = useState([]);
  const [loan, setLoan] = useState([]);
  const [productType, setProductType] = useState([]);
  const [data, setData] = useState(0);
  const [inputList, setInputList] = useState([
    { product_type: "", from: 0, commission: 0, to: 0 },
  ]);

  // console.log("loanCommission", loanCommission);
  console.log("{ loanCommission?.bank_name}", loanCommission?.bank_name);

  useEffect(() => {
    if (specialData) {
      setProductType(specialData?.commission);
      setLoanCommission(specialData);
    } else {
      fetch(`${process.env.REACT_APP_HOST_URL}/api/loan_commission/${id}/`)
        .then((response) => response.json())
        .then((data) => {
          setLoanCommission(data);
          console.log("(data?.product_type", data);
          setProductType(data?.product_type);
        });
    }
  }, [specialData, id]);

  useEffect(() => {
    const loadinstitute = async () => {
      fetch("https://admin.aamartaka.com/api/v1/loans/institutes/")
        .then((response) => response.json())
        .then((res) => {
          const data = res?.filter((item) => item?.is_partner === true);
          // const rest = res.results;
          // const result = rest.filter((item) => item.is_partner === true);
          // console.log(result);
          setData(data);
        });
    };

    const loadLoanType = async () => {
      await fetch(`${process.env.REACT_APP_HOST_URL}/benefit/loan_type/`)
        .then((response) => response.json())
        .then((res) => setLoan(res.results));
    };

    loadLoanType();
    loadinstitute();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;
    let API;

    if (specialData) {
      API = `api/agent/commission`;
      data = {
        commission: productType,
        bank_name: loanCommission?.bank_name || inst,
      };
    } else {
      API = `api/loan_commission`;
      data = {
        bank_name: loanCommission?.bank_name || inst,
        product_type: productType,
      };
    }
    await axios
      .patch(`${process.env.REACT_APP_HOST_URL}/${API}/${id}/`, data)
      .then((result) => {
        if (result.status === 200) {
          SuccessAlert("Successfully Update", "success");
          navigate(-1);
        } else SuccessAlert("Something Wrong ", "error");
      });
  };

  return (
    <div className=" h-screen m-3 p-3">
      <div className="w-full mb-6 md:mb-0  ">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Institute Name
        </label>

        <select
          className="w-full my-2 border-gray-300 rounded h-10 p-2 border"
          name="institite"
          onChange={(e) => setInst(e.target.value)}
        >
          <option value={loanCommission?.bank_name}>
            {loanCommission?.bank_name}
          </option>
          {data &&
            data.map((item) => (
              <option value={item?.name}>{item?.name}</option>
            ))}
        </select>
        {/* {error && (
          <label className=" text-red-400 my-1">Select Institute</label>
        )} */}
      </div>

      <EditLoanCommissionCard
        loanType={loan}
        productType={productType}
        setLoanCommission={setLoanCommission}
        setProductType={setProductType}
        id={id}
      />
      <button
        onClick={handleSubmit}
        className=" px-4 py-1 text-white bg-sky-400 rounded-lg"
        // type="submit"
        // value="Update"
      >
        Update
      </button>
    </div>
  );
};

export default EditLoanCommissionNew;
