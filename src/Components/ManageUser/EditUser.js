import React, { useEffect, useState } from "react";
import Select from "react-select";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";

const EditUser = ({ data }) => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [team, setTeam] = useState(null);
  const teamList = [
    { value: "Operation", label: "Operation" },
    { value: "RTC", label: "RTC" },
    { value: "Support", label: "Support" },
    { value: "Bank Return", label: "Bank Return" },
  ];

  const handleBlur = (e) => {
    const newData = { ...user };
    newData[e.target.name] = e.target.value;
    setUser(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...user,
      teamName: team.value,
    };
    SuccessAlert("Your work has been saved", "success");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className=" mx-2">
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
            name="userName"
            placeholder="Jane"
            required
            defaultValue={data?.userName}
            onBlur={handleBlur}
          />
          {/* <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p> */}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-[#B3B3B3] rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="email"
            name="email"
            placeholder="email"
            required
            defaultValue={data?.email}
            onBlur={handleBlur}
          />
        </div>
      </div>
      {/* <div className="flex flex-wrap -mx-3 mb-6">
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
            name="password"
            minLength={6}
            onBlur={handleBlur}
            placeholder="******************"
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div> */}

      {/* distric and divition  */}
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full  px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Team
          </label>
          <Select
            required
            name="teamName"
            onChange={setTeam}
            defaultValue={data?.name}
            options={teamList}
            // onBlur={handleBlur}
            className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
      </div>

      <div className=" flex justify-between items-center">
        <button
          className="bg-red-400 py-2 px-4  rounded-lg my-4  "
          type="submit"
        >
          Reset Password
        </button>
        <button
          className="bg-green-400 py-2 px-4  rounded-lg my-4  "
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditUser;
