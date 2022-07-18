import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
import { useNavigate } from "react-router-dom";
const LoanCommission = ({ vrmUser, commission }) => {
  let navigate = useNavigate();
  const [inst, setInst] = useState([]);
  const [loan, setLoan] = useState([]);
  const [institute_name, setInstitute] = useState("");
  const [loan_name, setLoanName] = useState("");
  const [from_range, setFrom] = useState(0);
  const [to_range, setTo] = useState(0);
  const [commissionn, setCommission] = useState(0);

  useEffect(() => {
    fetch("https://admin.aamartaka.com/api/v1/institutes/")
      .then((response) => response.json())
      .then((res) => setInst(res.results));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}/benefit/loan_type/`)
      .then((response) => response.json())
      .then((res) => setLoan(res.results));
  }, []);

  let options = inst?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });

  let loanOpt = loan?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      institute_name: institute_name.value,
      loan_name: loan_name.value,
      from_range: parseInt(from_range),
      to_range: parseInt(to_range),
      commissionn: parseInt(commissionn),
    };
    if (vrmUser?.id) {
      const loan = {
        product_type: loan_name.value,
        from: parseInt(from_range),
        to: parseInt(to_range),
        commission: parseInt(commissionn),
      };
      const newData = {
        expire_date: commission?.expire_date,
        agent: vrmUser?.id,
        bank_name: institute_name.value,
        product: commission?.name,
        commission: [loan],
      };
      console.log(newData);
      await axios
        .post(
          `${process.env.REACT_APP_HOST_URL}/api/agent/commission/`,
          newData
        )
        .then((result) => {
          if (result.status === 201) {
            SuccessAlert("Successfully Added", "success");
            navigate("/specialcommissionList");
          }
        });
    } else {
      await axios
        .post(`${process.env.REACT_APP_HOST_URL}/api/loan_commission/`, data)
        .then((result) => {
          if (result.status === 201) {
            SuccessAlert("Successfully Added", "success");
            navigate(-1);
          }
        });
    }
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
          <Select
            required
            name="profession"
            onChange={setInstitute}
            options={options}
            className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
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
                  <Select
                    required
                    name="profession"
                    onChange={setLoanName}
                    options={loanOpt}
                    className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
                  />
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <input
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
                    required
                    type="number"
                    name="name"
                    onChange={(e) => setCommission(e.target.value)}
                    onInput={(e) => {
                      if (e.target.value.length > e.target.maxLength)
                        e.target.value = e.target.value.slice(
                          0,
                          e.target.maxLength
                        );
                    }}
                    maxlength="3"
                    placeholder="Per Lac BDT"
                    className="my-2  focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className=" bg-green-400  hover:shadow-2xl rounded py-2 px-4 text-white mt-4 float-right w-40 ">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanCommission;
