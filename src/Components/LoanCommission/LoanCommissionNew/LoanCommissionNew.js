import React, { useEffect, useState } from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import ReactDOM from "react-dom";
import axios from "axios";
import { SuccessAlert } from "../../../Shared/Alert/SuccessAlert";
import { useNavigate } from "react-router-dom";

function LoanCommissionNew({ vrmUser, commission }) {
  const navigate = useNavigate();
  const [inst, setInst] = useState([]);
  const [loan, setLoan] = useState([]);
  const [institute, setInstitute] = useState("");
  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      loan_commission: [
        {
          to: 0,
          from: 0,
          commission: 0,
          product_type: "",
        },
      ],
    },
  });

  const { fields, append, prepend, remove, swap, move, insert, replace } =
    useFieldArray({
      control,
      name: "loan_commission",
    });

  const onSubmit = async (data) => {
    if (vrmUser?.id) {
      const newData = {
        expire_date: commission?.expire_date,
        agent: vrmUser?.id,
        bank_name: institute,
        product: commission?.name,
        commission: data?.loan_commission,
      };
      console.log("access", newData);
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
      const newData = {
        bank_name: institute,
        product_type: data?.loan_commission,
      };
      await axios
        .post(`${process.env.REACT_APP_HOST_URL}/api/loan_commission/`, newData)
        .then((result) => {
          if (result.status === 201) {
            SuccessAlert("Successfully Added", "success");
            // navigate("/lclist");
          }
        });
    }
  };

  useEffect(() => {
    const loadinstitute = async () => {
      fetch("https://admin.aamartaka.com/api/v1/loans/institutes/")
        .then((response) => response.json())
        .then((res) => {
          const data = res?.filter((item) => item?.is_partner === true);
          setInst(data);
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

  console.log("11", vrmUser);
  console.log("22", commission);

  return (
    <div className=" h-screen m-3 p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <option value="Select">Select</option>
            {inst &&
              inst.map((item) => (
                <option value={item?.name}>{item?.name}</option>
              ))}
          </select>
        </div>

        <div className=" hidden md:grid grid-cols-5 bg-black text-white py-2 px-3 font-bold uppercase">
          <div>
            <h1> Card Type</h1>
          </div>
          <div>
            <h1> From</h1>
          </div>
          <div>
            <h1> To</h1>
          </div>
          <div>
            <h1> Commission</h1>
          </div>
          <div></div>
        </div>
        <ul>
          {fields.map((item, index) => {
            return (
              <div
                className=" grid grid-cols-5 place-content-center place-items-center gap-3"
                key={item.id}
              >
                <select
                  className="w-full mx-2 p-2 border border-gray-300 mr-2 my-2 rounded "
                  {...register(`loan_commission.${index}.product_type`)}
                >
                  <option defaultValue="Select" value="Select">
                    Select
                  </option>
                  {loan &&
                    loan.map((item) => (
                      <option value={item?.name}>{item?.name}</option>
                    ))}
                </select>
                <input
                  className="w-full mx-2 p-2 border border-gray-300 mr-2 my-2 rounded "
                  {...register(`loan_commission.${index}.from`)}
                />
                <input
                  className="w-full mx-2 p-2 border border-gray-300 mr-2 my-2 rounded "
                  {...register(`loan_commission.${index}.to`)}
                />

                <Controller
                  render={({ field }) => (
                    <input
                      className=" p-2 border border-gray-300 mr-2 my-2 rounded "
                      {...field}
                    />
                  )}
                  name={`loan_commission.${index}.commission`}
                  control={control}
                />
                <section className=" flex justify-center items-center">
                  {index !== 0 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className=" bg-[#fc544b] border-[#fc544b] shadow-red-400  hover:shadow-2xl rounded  py-2 text-white w-full md:w-16"
                    >
                      Delete
                    </button>
                  )}
                  {index === 0 && (
                    <button
                      className=" bg-green-400 deleteBtn hover:shadow-2xl rounded w-full md:w-16 "
                      type="button"
                      onClick={() => {
                        append({
                          to: 0,
                          from: 0,
                          commission: 0,
                          product_type: "",
                        });
                      }}
                    >
                      Add
                    </button>
                  )}
                </section>
              </div>
            );
          })}
        </ul>

        <input
          className=" bg-sky-400 text-white px-6 py-1 rounded-lg text-lg mt-12"
          type="submit"
        />
      </form>
    </div>
  );
}

export default LoanCommissionNew;
