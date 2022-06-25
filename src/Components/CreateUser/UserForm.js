import React, { useState } from "react";
import Select from "react-select";
const UserForm = () => {
  const [profession, setProfession] = useState(null);
  const professionData = [
    { value: "Banani, Dhaka-1230", label: "Banani, Dhaka-1230" },
    { value: "Mohakhali, Dhaka-1230", label: "Mohakhali, Dhaka-1230" },
    { value: "Badda, Dhaka-1230", label: "Badda, Dhaka-1230" },
    { value: "Gazipur, Dhaka-1230", label: "Gazipur, Dhaka-1230" },
  ];
  return (
    <form className=" mx-2">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-[#B3B3B3] rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Mobile
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-[#B3B3B3] rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="number"
            placeholder="01X00000000"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full  text-gray-700 border border-[#B3B3B3] rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="******************"
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>

      <div className="w-full mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Address
        </label>
        <Select
          required
          name="profession"
          onChange={setProfession}
          options={professionData}
          className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
        />
      </div>
      <button
        className="bg-green-400 py-2 px-4 float-right rounded-lg my-4 w-28"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
