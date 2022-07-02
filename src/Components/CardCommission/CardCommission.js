import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import axios from "axios";

const CardCommission = () => {
  const [addCommission, setAddCommission] = useState([{ id: 1 }]);
  const [counter, setCounter] = useState(2);

  const selectInputRef = useRef();
  const [data, setData] = useState([]);
  const [cardType, setCardType] = useState(null);
  const [inst, setInst] = useState(null);
  const [from_range, setFrom] = useState(null);
  const [to_range, setTo] = useState(null);
  const [commissionn, setCommission] = useState(null);
  const [institute_name, setInstitute] = useState("");
  const [card_name, setCardtype] = useState("");

  useEffect(() => {
    fetch("https://admin.aamartaka.com/api/v1/institutes/")
      .then((response) => response.json())
      .then((json) => setInst(json.results));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/benefit/card_type/list/")
      .then((response) => response.json())
      .then((json) => setCardType(json.results));
  }, []);

  let options = inst?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });

  let card_option = cardType?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      institute_name: institute_name,
      card_name: card_name,
      from_range: from_range,
      to_range: to_range,
      commissionn: commissionn,
    };

    await axios
      .post("http://127.0.0.1:8000/benefit/card_commision/add/", data)
      .then((result) => console.log(result));
    selectInputRef.current.clearValue();
    e.target.reset();
  };

  const handleCounter = () => {
    setCounter(counter + 1);
    const id = {
      id: counter,
    };
    const newArray = [...addCommission, id];
    setAddCommission(newArray);
  };

  const handleDelete = (e) => {
    const result = addCommission.filter((item) => item.id !== e.id);
    setAddCommission(result);
  };

  return (
    <div className=" h-screen overflow-scroll p-3 my-3">
      <form onSubmit={handleSubmit}>
        <div className="w-full mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Institute Name
          </label>
          <Select
            id="institute"
            required
            name="name"
            onChange={setInstitute}
            options={options}
            className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
          />
        </div>

        {/* start table  */}
        <div className=" overflow-x-auto  sm:rounded-lg  mt-3 ">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs  uppercase bg-slate-800 text-white dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  Card Type
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
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td
                  scope="row"
                  className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <Select
                    required
                    name="name"
                    onChange={setCardtype}
                    options={card_option}
                    className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
                  />
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <input
                    required
                    name="name"
                    onChange={(e) => setFrom(e.target.value)}
                    type="number"
                    className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
                  />
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <input
                    required
                    name="name"
                    onChange={(e) => setTo(e.target.value)}
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
                    max="3000"
                    onChange={(e) => setCommission(e.target.value)}
                    placeholder="BDT"
                    className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
                  />
                </td>
                <td
                  scope="row"
                  className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                >
                  <button
                    onClick={handleCounter}
                    className=" bg-green-400 deleteBtn hover:shadow-2xl rounded  "
                  >
                    +
                  </button>

                  <button
                    onClick={() => handleDelete()}
                    className=" bg-[#fc544b] border-[#fc544b] shadow-red-400 deleteBtn hover:shadow-2xl rounded "
                  >
                    -
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* end table  */}
        </div>

        <div className=" flex justify-between items-center">
          <input
            className=" bg-sky-500 py-1 px-8 rounded-[15px] text-white  mt-3 "
            type="submit"
            value=" Submit"
          />
          <input
            onClick={handleCounter}
            className=" bg-sky-500 py-1 px-8 rounded-[15px] text-white  mt-3 "
            type="submit"
            value=" Add More"
          />
        </div>
      </form>
    </div>
  );
};

export default CardCommission;
