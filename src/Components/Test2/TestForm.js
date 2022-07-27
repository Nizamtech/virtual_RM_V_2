import React, { useEffect } from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import ReactDOM from "react-dom";
import "./style.css";
import { addMoreFuncton } from "../../Redux/Slices/userSlice";
import { useState } from "react";
import { useSelector } from "react-redux";

function TestForm({ onSubmit, setTestData }) {
  const cardList = useSelector((state) => state.reducer.cardList);
  const [cardTypeData, setCardTypeData] = useState([]);

  const { register, control, handleSubmit, reset, watch, getValues } = useForm({
    defaultValues: {
      cardComission: [
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
      name: "cardComission",
    });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}/benefit/card_type/`)
      .then((response) => response.json())
      .then((data) => setCardTypeData(data?.results));
  }, []);

  function handleChange() {
    const data = getValues();
    // console.log(data);
    setTestData(data);
    // dispatch(addMoreFuncton([data]));
  }

  return (
    <form onChange={handleChange}>
      <div>
        {" "}
        <ul>
          {fields.map((item, index) => {
            return (
              <li
                key={item.id}
                className="grid gap-6 grid-cols-5 place-content-center place-items-center"
              >
                <select
                  placeholder="Select"
                  {...register(`cardComission.${index}.product_type`)}
                  className="ml-10 p-2  border border-gray-300 mr-2 my-2 rounded w-full"
                  name="product_type"
                >
                  <option selected disabled>
                    Select
                  </option>

                  {cardList &&
                    cardList.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                </select>
                <input
                  {...register(`cardComission.${index}.from`)}
                  className="mx-10 p-2  border border-gray-300 mr-2 my-2 rounded w-full"
                />
                <input
                  {...register(`cardComission.${index}.to`)}
                  className="mx-10 p-2  border border-gray-300 mr-2 my-2 rounded w-full"
                />

                {/* <input
                  {...register(`cardComission.${index}.productType`)}
                  className="mx-10 p-2  border border-gray-300 mr-2 my-2 rounded "
                /> */}
                {/* <input {...register(`cardComission.${index}.commission`)} /> */}

                <Controller
                  render={({ field }) => (
                    <input
                      {...field}
                      className="mx-10 p-2  border border-gray-300 mr-2 my-2 rounded w-full"
                    />
                  )}
                  name={`cardComission.${index}.commission`}
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
              </li>
            );
          })}
        </ul>
        {/* <button
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
    Add More
  </button> */}
        {/* <input onClick={handleSubmit(onSubmit)} type="submit" /> */}
      </div>
    </form>
  );
}

export default TestForm;
