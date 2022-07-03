import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import CardCommissionTable from "./CardCommissionTable";

const CardCommission = () => {
  const [addCommission, setAddCommission] = useState([{ id: 1 }]);
  const [counter, setCounter] = useState(2);

  const selectInputRef = useRef();
  const [data, setData] = useState([]);
  const [cardType, setCardType] = useState([]);
  const [institute, setInstitute] = useState(null);
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);
  const [commission, setCommission] = useState([]);
  const [mockData, setMockData] = useState([
    {
      card_type: "",
      from: null,
      to: null,
      commission: "",
    },
  ]);

  useEffect(() => {
    fetch("https://admin.aamartaka.com/api/v1/institutes/")
      .then((response) => response.json())
      .then((res) => {
        const rest = res.results;
        // const result = rest.filter((item) => item.is_partner === true);
        // console.log(result);
        setData(rest);
      });
  }, []);

  let options = data?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });
  const handleChange = (e) => {
    setCommission(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      institute_name: institute?.value,
      card_name: cardType,
      from_range: from,
      to_range: to,
      commissionn: commission,
    };

    console.log(data);
    // await axios
    //   .post("http://127.0.0.1:8000/benefit/card_commision/add/", data)
    //   .then((result) => console.log(result.data));
    // selectInputRef.current.clearValue();
    // e.target.reset();
  };

  const handleCounter = () => {
    setCounter(counter + 1);
    const id = {
      id: counter,
    };
    const newArray = [...addCommission, id];
    setAddCommission(newArray);
  };
  console.log(commission);

  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen  overflow-scroll p-3 my-3 "
    >
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

      {addCommission &&
        addCommission.map((item) => (
          <CardCommissionTable
            cardType={cardType}
            setCardType={setCardType}
            institute={institute}
            setInstitute={setInstitute}
            from={from}
            setFrom={setFrom}
            to={to}
            setTo={setTo}
            commission={commission}
            setCommission={setCommission}
            addCommission={addCommission}
            setAddCommission={setAddCommission}
            handleChange={handleChange}
            mockData={mockData}
            setMockData={setMockData}
          />
        ))}

      <div className=" flex justify-between items-center ">
        <input
          className=" bg-sky-500 py-1 px-8 rounded-[15px] text-white  mt-3 "
          type="submit"
          value=" Submit"
          onClick={handleSubmit}
        />
        <button
          onClick={handleCounter}
          className=" bg-sky-500 py-1 px-8 rounded-[15px] text-white  mt-3 "
        >
          Add More
        </button>
      </div>
    </form>
  );
};

export default CardCommission;
