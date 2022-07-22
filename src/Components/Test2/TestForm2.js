import * as React from "react";
import { useState } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
// import Headers from "./Header";
import "./style.css";
import { useSelector } from "react-redux";
import TestForm from "./TestForm";

const fieldArrayName = "array";

const Edit = ({ onSubmit, setTestData }) => {
  const data = useSelector((state) => state.reducer.commissionData);
  console.log("Dattataa", data);
  return (
    <div>
      <TestForm onSubmit={onSubmit} setTestData={setTestData} />
    </div>
  );
};

export default function TestForm2() {
  const [testData, setTestData] = useState([]);
  const [d, setD] = useState([]);
  const { control, handleSubmit, getValues } = useForm();
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: fieldArrayName,
    defaultValues: {
      [fieldArrayName]: [],
    },
  });

  const onSubmit = (data) => console.log("data44", data);
  console.log("Dddd", d);

  const handleData = () => {
    setD([...d, testData]);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div>
      {/* onSubmit={handleSubmit(onSubmit)} */}
      <form>
        {fields.map((field, index) => (
          <fieldset key={field.id}>
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
        >
          Add more
        </button>{" "}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
