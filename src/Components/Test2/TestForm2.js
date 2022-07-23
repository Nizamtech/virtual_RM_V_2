import * as React from "react";
import { useState } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
// import Headers from "./Header";
import "./style.css";
import { useSelector } from "react-redux";
import TestForm from "./TestForm";

const fieldArrayName = "array";

const Edit = ({ onSubmit, setTestData }) => {
  return (
    <div>
      <TestForm onSubmit={onSubmit} setTestData={setTestData} />
    </div>
  );
};

export default function TestForm2({ setTestData, handleData }) {
  const { control, handleSubmit, getValues } = useForm();
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: fieldArrayName,
    defaultValues: {
      [fieldArrayName]: [],
    },
  });

  const onSubmit = (data) => console.log("data44", data);

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div>
      {/* onSubmit={handleSubmit(onSubmit)} */}
      <form>
        {fields.map((field, index) => (
          <fieldset key={field.id}>
            <div className=" grid grid-cols-5 bg-black text-white py-2 px-3 font-bold uppercase place-items-center">
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
              {/* <div>Action</div> */}
            </div>
            <Edit
              onSubmit={onSubmit}
              setTestData={setTestData}
              // getValues={getValues}
            />
            {/* <button
              className="remove"
              type="button"
              onClick={() => remove(index)}
            >
              Remove
            </button> */}
          </fieldset>
        ))}
        <br />
        <div className="flex justify-end items-end">
          {" "}
          <button
            type="button"
            onClick={() => {
              append({
                firstName: "",
                lastName: "",
                working: false,
              });
              handleData();
            }}
            className=" bg-sky-400 px-5 py-2 rounded-xl text-white text-lg "
          >
            Add more
          </button>
        </div>
        <br />
        {/* <input type="submit" /> */}
      </form>
    </div>
  );
}
