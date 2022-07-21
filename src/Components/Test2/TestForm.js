import React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import ReactDOM from "react-dom";

import "./style.css";

function TestForm({ onSubmit }) {
  const { register, control, handleSubmit, reset, watch } = useForm({
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

  return (
    <form>
      <div>
        {" "}
        <ul>
          {fields.map((item, index) => {
            return (
              <li
                key={item.id}
                className="grid grid-cols-5 place-content-center place-items-center"
              >
                <input {...register(`cardComission.${index}.to`)} />
                <input {...register(`cardComission.${index}.fro`)} />
                <input {...register(`cardComission.${index}.productType`)} />
                {/* <input {...register(`cardComission.${index}.commission`)} /> */}

                <Controller
                  render={({ field }) => <input {...field} />}
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
        <input onClick={handleSubmit(onSubmit)} type="submit" />
      </div>
    </form>
  );
}

export default TestForm;
