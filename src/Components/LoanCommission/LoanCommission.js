import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const LoanCommission = () => {
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
      .then((json) => setInst(json.results));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/benefit/loan_type/list/")
      .then((response) => response.json())
      .then((json) => setLoan(json.results));
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
      institute_name: institute_name,
      loan_name: loan_name,
      from_range: from_range,
      to_range: to_range,
      commissionn: commissionn,
    };

    await axios
      .post("http://127.0.0.1:8000/benefit/loan_commision/add/", data)
      .then((result) => console.log(result));
  };

  return (
    <div className=" w-full p-3 my-3">
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
        <div className=" overflow-x-auto  sm:rounded-lg  mt-3 h-screen ">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                    name="name"
                    maxLength={4}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="BDT"
                    className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
                  />
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <input
                    required
                    type="text"
                    name="name"
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="BDT"
                    className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
                  />
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <input
                    required
                    type="text"
                    name="name"
                    onChange={(e) => setCommission(e.target.value)}
                    placeholder="Per Lac BDT"
                    className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className=" bg-green-400  hover:shadow-2xl rounded py-2 px-4 text-white mt-4 float-right ">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanCommission;
