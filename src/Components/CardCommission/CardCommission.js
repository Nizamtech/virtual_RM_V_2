import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import CardCommissionTest from "./CardCommissionTest/CardCommissionTest";

const CardCommission = () => {
  const [institute, setInstitute] = useState(null);
  const [inputList, setInputList] = useState([
    { card_type: "", from: 0, commission: 0, to: 0 },
  ]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      card_type: [...inputList],
      bank_name: institute?.value,
    };

    await axios
      .post("http://127.0.0.1:8000/benefit/card_commision/add/", data)
      .then((result) => console.log(result.data));
    // selectInputRef.current.clearValue();
    console.log(data);
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen  overflow-scroll p-3 my-3 "
    >
      <CardCommissionTest
        institute={institute}
        setInstitute={setInstitute}
        inputList={inputList}
        setInputList={setInputList}
      />

      <div className=" flex justify-between items-center ">
        <input
          className=" bg-sky-500 py-1 px-8 rounded-[15px] text-white  mt-3 "
          type="submit"
          value=" Submit"
          onClick={handleSubmit}
        />
        {/* <button
          onClick={handleCounter}
          className=" bg-sky-500 py-1 px-8 rounded-[15px] text-white  mt-3 "
        >
          Add More
        </button> */}
      </div>
    </form>
  );
};

export default CardCommission;
