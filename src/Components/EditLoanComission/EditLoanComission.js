import axios from "axios";

import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
import { useNavigate } from "react-router-dom";
const EditLoanComission = ({ status, specialData }) => {
  const [loanCommission, setLoanCommission] = useState([]);
  const { id } = useParams();

  let navigate = useNavigate();
  const [inst, setInst] = useState([]);
  const [loan, setLoan] = useState([]);
  const [institute_name, setInstitute] = useState("");
  const [loan_name, setLoanName] = useState("");
  const [from_range, setFrom] = useState(0);
  const [to_range, setTo] = useState(0);
  const [expireDate, setExpireDate] = useState("");
  const [commissionn, setCommission] = useState(0);

  useEffect(() => {
    const loadinstitute = async () => {
      await fetch("https://admin.aamartaka.com/api/v1/institutes/")
        .then((response) => response.json())
        .then((json) => setInst(json.results));
    };

    const loadLoanType = async () => {
      await fetch(`${process.env.REACT_APP_HOST_URL}/benefit/loan_type/`)
        .then((response) => response.json())
        .then((json) => setLoan(json.results));
    };

    loadLoanType();
    loadinstitute();
  }, []);

  useEffect(() => {
    if (specialData) {
      const { to, from, commission, product_type } = specialData?.commission[0];
      const data = {
        commissionn: commission,
        from_range: from,
        institute_name: specialData?.bank_name,
        loan_name: product_type,
        to_range: to,
      };
      console.log(2);
      setLoanCommission(data);
    } else {
      axios
        .get(`${process.env.REACT_APP_HOST_URL}/api/loan_commission/${id}/`)
        .then((res) => {
          console.log("Sp", res?.data);
          setLoanCommission(res?.data);
        });
      console.log(2);
    }
  }, [specialData, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;
    let API;

    if (specialData) {
      API = `api/agent/commission`;
      const newData = {
        to: to_range || loanCommission?.to_range,
        from: from_range || loanCommission?.from_range,
        commission: commissionn || loanCommission?.commissionn,
        product_type: loan_name || loanCommission?.loan_name,
      };
      data = {
        commission: [newData],
        bank_name: institute_name || loanCommission?.institute_name,
      };
    } else {
      API = `api/loan_commission`;
      data = {
        institute_name: institute_name || loanCommission?.institute_name,
        loan_name: loan_name || loanCommission?.loan_name,
        from_range: from_range || loanCommission?.from_range,
        to_range: to_range || loanCommission?.to_range,
        commissionn: commissionn || loanCommission?.commissionn,
      };
    }
    await axios
      .put(`${process.env.REACT_APP_HOST_URL}/${API}/${id}/`, data)
      .then((result) => {
        if (result.status === 200) {
          SuccessAlert("Successfully Update", "success");
          navigate(-1);
        } else SuccessAlert("Something Wrong ", "error");
      });
  };

  return (
    <div className="p-3 my-3">
      <form onSubmit={handleSubmit}>
        <div className="w-full mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Institute Name
          </label>

          <select
            className="w-full my-2 border-gray-300 rounded h-12 border px-2"
            name="institite"
            onChange={(e) => setInstitute(e.target.value)}
          >
            <option
              defaultValue={loanCommission?.institute_name}
              value={loanCommission?.institute_name}
            >
              {loanCommission?.institute_name || "Select"}
            </option>
            {inst &&
              inst.map((item) => (
                <option value={item?.name}>{item?.name}</option>
              ))}
          </select>
        </div>
        {status && (
          <div className=" mt-2 mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Expire Date
            </label>

            <input
              type="date"
              onChange={(e) => {
                setExpireDate(e?.target?.value);
              }}
              className=" h-12 p-2 w-full"
              name="expire_date"
            />
          </div>
        )}
        <div className="sm:rounded-lg  mt-3 h-screen  ">
          <table className=" min-w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
            <thead className="text-xs  uppercase bg-slate-800 text-white dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  Product Type
                </th>
                <th scope="col" className="px-6 py-3">
                  From
                </th>
                <th scope="col" className="px-6 py-3">
                  To
                </th>
                <th scope="col" className="px-6 py-3">
                  Commission
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td
                  scope="row"
                  className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 "
                >
                  <select
                    className="w-full my-2 border-gray-300 rounded border h-9"
                    name="institite"
                    onChange={(e) => setLoanName(e.target.value)}
                  >
                    <option
                      defaultValue={loanCommission?.loan_name}
                      value={loanCommission?.loan_name}
                    >
                      {loanCommission?.loan_name || "Select"}
                    </option>
                    {loan &&
                      loan.map((item) => (
                        <option value={item?.name}>{item?.name}</option>
                      ))}
                  </select>
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <input
                    defaultValue={loanCommission?.from_range}
                    required
                    type="number"
                    name="from"
                    onInput={(e) => {
                      if (e.target.value.length > e.target.maxLength)
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.maxLength
                        );
                    }}
                    maxlength="8"
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="BDT"
                    className="my-2  focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
                  />
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <input
                    defaultValue={loanCommission?.to_range}
                    required
                    type="number"
                    name="to"
                    onChange={(e) => setTo(e.target.value)}
                    onInput={(e) => {
                      if (e.target.value.length > e.target.maxLength)
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.maxLength
                        );
                    }}
                    maxlength="8"
                    placeholder="BDT"
                    className="my-2  focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
                  />
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <input
                    defaultValue={loanCommission?.commissionn}
                    required
                    type="number"
                    name="commissionn"
                    onChange={(e) => setCommission(e.target.value)}
                    onInput={(e) => {
                      if (e.target.value.length > e.target.maxLength)
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.maxLength
                        );
                    }}
                    maxlength="5"
                    placeholder="Per Lac BDT"
                    className="my-2  focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className=" bg-green-400  hover:shadow-2xl rounded py-2 px-4 text-white mt-4 float-right w-40 ">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditLoanComission;
