import React, { useEffect } from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import ReactDOM from "react-dom";

import "./style.css";
import { useDispatch } from "react-redux";
import { addMoreFuncton } from "../../Redux/Slices/userSlice";
import { useState } from "react";

function TestForm({ onSubmit, setTestData }) {
  const [cardTypeData, setCardTypeData] = useState([]);
  // dispatch(addMoreFuncton(testData));

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
                  {...register(`cardComission.${index}.from`)}
                  className="ml-10 p-2  border border-gray-300 mr-2 my-2 rounded w-full"
                  name="product_type"
                  id="cars"
                >
                  <option defaultValue="Select" value="Select">
                    select
                  </option>
                  {cardTypeData &&
                    cardTypeData.map((item) => (
                      <option defaultValue={item?.name} value={item?.name}>
                        {item?.name}
                      </option>
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
                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <section>
          <button
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
        </section>
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
