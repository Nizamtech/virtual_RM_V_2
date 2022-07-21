import * as React from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
// import Headers from "./Header";
import "./style.css";
import TestForm from "./TestForm";

let renderCount = 0;

const fieldArrayName = "array";

const Edit = ({ update, index, value, control }) => {
  const onSubmit = (data) => console.log("data", data);

  return (
    <div>
      <TestForm onSubmit={onSubmit} />
    </div>
  );
};

export default function TestForm2() {
  const { control, handleSubmit } = useForm();
  const { fields, append, update, remove } = useFieldArray({
    control,
    name: fieldArrayName,
    defaultValues: {
      [fieldArrayName]: [],
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  renderCount++;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <fieldset key={field.id}>
            <Edit
              control={control}
              update={update}
              index={index}
              value={field}
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
