import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
const CardCommissionTable = () => {
  const [addCommission, setAddCommission] = useState([{ id: 1 }]);
  const [counter, setCounter] = useState(2);
  const selectInputRef = useRef();
  const [data, setData] = useState([]);
  const [cardType, setCardType] = useState(null);
  const [institute, setInstitute] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [commission, setCommission] = useState(null);

  const cardCommissionData = [
    { value: "Silver", label: "Silver" },
    { value: "Platinum, Dhaka-1230", label: "Platinum" },
    { value: "Gold", label: "Gold" },
    { value: "Classic", label: "Classic" },
  ];
  const numberCount = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ];

  useEffect(() => {
    fetch("https://admin.aamartaka.com/api/v1/institutes/")
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  let options = data?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });
  const handleChange = (e) => {
    setCommission(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      institute: institute?.value,
      cardType: cardType?.value,
      from: from?.value,
      to: to?.value,
      commission: commission,
    };
    console.log("from function", data);
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
    <div className="">
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
            {addCommission &&
              addCommission.map((item) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td
                    scope="row"
                    className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <Select
                      required
                      name="profession"
                      onChange={setCardType}
                      options={cardCommissionData}
                      className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
                    />
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <Select
                      required
                      name="profession"
                      onChange={setFrom}
                      options={numberCount}
                      className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
                    />
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    <Select
                      required
                      name="profession"
                      onChange={setTo}
                      options={numberCount}
                      className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
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
                      maxLength={4}
                      max="3000"
                      onChange={handleChange}
                      placeholder="BDT"
                      className="my-2 focus:outline-[#2684FF] focus:duration-400 font-exo w-full h-8 border py-4 px-3 rounded-[3px] border-[#CCCCCC] "
                    />
                  </td>
                  <td
                    scope="row"
                    className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                  >
                    {item.id === 1 ? (
                      <button
                        onClick={handleCounter}
                        className=" bg-green-400 deleteBtn hover:shadow-2xl rounded  "
                      >
                        +
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDelete(item)}
                        className=" bg-[#fc544b] border-[#fc544b] shadow-red-400 deleteBtn hover:shadow-2xl rounded "
                      >
                        -
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* end table  */}
    </div>
  );
};

export default CardCommissionTable;
