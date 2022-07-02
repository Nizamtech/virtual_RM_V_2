import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import CardCommissionTable from "./CardCommissionTable";
const CardCommission = () => {
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
      .then((res) => {
        const rest = res.results;
        console.log(rest);
        const result = rest.filter((item) => item.is_partner === true);
        console.log(result);
        setData(res.results);
      });
  }, []);

  let options = data?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });
  const handleChange = (e) => {
    setCommission(e.target.value);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     institute: institute?.value,
  //     cardType: cardType?.value,
  //     from: from?.value,
  //     to: to?.value,
  //     commission: commission,
  //   };
  //   console.log("from function", data);
  //   selectInputRef.current.clearValue();
  //   e.target.reset();
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     institute_name: institute_name,
  //     card_name: card_name,
  //     from_range: from_range,
  //     to_range: to_range,
  //     commissionn: commissionn,
  //   };

  //   await axios
  //     .post("http://127.0.0.1:8000/benefit/card_commision/add/", data)
  //     .then((result) => console.log(result));
  //   selectInputRef.current.clearValue();
  //   e.target.reset();
  // };

  const handleCounter = () => {
    setCounter(counter + 1);
    const id = {
      id: counter,
    };
    const newArray = [...addCommission, id];
    setAddCommission(newArray);
  };
  console.log(addCommission);
  return (
    <div className="h-screen  overflow-scroll p-3 my-3 ">
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

      {addCommission && addCommission.map((item) => <CardCommissionTable />)}

      <div className=" flex justify-between items-center ">
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
    </div>
  );
};

export default CardCommission;
