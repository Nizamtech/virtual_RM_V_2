import * as React from "react";
import { useState } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
// import Headers from "./Header";
import "./style.css";
import TestForm from "./TestForm";

let renderCount = 0;

const fieldArrayName = "array";

const Edit = ({ onSubmit }) => {
  return (
    <div>
      <TestForm onSubmit={onSubmit} />
    </div>
  );
};

export default function TestForm2() {
  const [commissionData, setCommissionData] = useState([]);
  const { control, handleSubmit } = useForm();
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: fieldArrayName,
    defaultValues: {
      [fieldArrayName]: [],
    },
  });
  const onSubmit = (data) => console.log("data44", data);
  const handleData = () => {
    console.log("dfddf");
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  renderCount++;

  return (
    <div>
      {/* onSubmit={handleSubmit(onSubmit)} */}
      <form>
        {fields.map((field, index) => (
          <fieldset key={field.id}>
            <Edit onSubmit={onSubmit} />
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
