import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Router, useNavigate } from "react-router-dom";
import Select from "react-select";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
import AddMoreCard from "./AddMoreCard";
import { useSelector, useDispatch } from "react-redux";
import { addMoreFn, specialCommission } from "../../Redux/Slices/userSlice";
const AddMore = ({ vrmUser, commission }) => {
  const router = useNavigate();
  const [counter, setCounter] = useState(0);
  const [institute, setInstitute] = useState(null);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const [addM, setAddM] = useState([
    { product_type: "", from: 0, commission: 0, to: 0 },
  ]);
  const dispatch = useDispatch();
  const commis = useSelector((state) => state.reducer.commission);
  const addMoreData = useSelector((state) => state.reducer.addM);
  console.log("addMoreData", addMoreData);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      //   product_type: [...inputList],
      bank_name: institute,
    };
    if (vrmUser?.id) {
      console.log("innnn");

      // data.expire_date = commission?.expire_date;
      const newData = {
        expire_date: commission?.expire_date,
        agent: vrmUser?.id,
        bank_name: institute,
        product: commission?.name,
        // commission: [...inputList],
      };

      console.log(vrmUser?.id, newData);
      if (institute) {
        await axios
          .post(
            `${process.env.REACT_APP_HOST_URL}/api/agent/commission/`,
            newData
          )
          .then((result) => {
            if (result.status === 201) {
              SuccessAlert("Successfully Added", "success");
              router("/specialcommissionList");
            }
          });
      } else setError(true);
    } else {
      console.log("out");
      if (institute) {
        setError(false);
        await axios
          .post(`${process.env.REACT_APP_HOST_URL}/api/card_commission/`, data)
          .then((result) => {
            if (result?.status === 201) {
              SuccessAlert("Successfully Added", "success");
              router("/cclist");
            } else SuccessAlert("Something Wrong", "error");
          });
      } else setError(true);
    }
  };
  const handleAddMore = () => {
    setAddM([...addM, { product_type: "", from: 0, commission: 0, to: 0 }]);
    dispatch(addMoreFn(commis));
  };

  return (
    <div className="h-screen  overflow-scroll p-3 my-3 ">
      {addM &&
        addM.map((item) => (
          <AddMoreCard
          // handleRemoveClick={handleRemoveClick}
          // handleAddClick={handleAddClick}
          // handleInputChange={handleInputChange}
          // inputList={inputList}
          />
        ))}

      <div className=" flex justify-between items-center ">
        <input
          onClick={handleSubmit}
          className=" bg-sky-500 py-2 px-8 rounded-[15px] text-white  mt-3 text-[18px] "
          type="submit"
          value=" Submit"
        />
        <button
          onClick={handleAddMore}
          className=" bg-sky-500 py-1 px-8 rounded-[15px] text-white  mt-3 "
        >
          Add More
        </button>
      </div>
    </div>
  );
};

export default AddMore;
