import React, { useEffect, useState } from "react";
import Select from "react-select";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
import axios from "axios";

const CreateUserForm = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [team, setTeam] = useState(null);

  const teamList = [
    { value: "Operation", label: "Operation" },
    { value: "RTC", label: "RTC" },
    { value: "Support", label: "Support" },
    { value: "Bank Return", label: "Bank Return" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      email: email,
      phone: phone,
      password: password,
    };
    // const user=JSON.stringify(userData)
    console.log(user);
    await axios
      .post("http://127.0.0.1:8000/accounts/user/register/", userData)
      .then((result) => console.log(result));
  };

  return (
    <form onSubmit={handleSubmit} className=" mx-2">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Username
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-[#B3B3B3] rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            name="userName"
            placeholder="Jane"
            required
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Phone Number
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-[#B3B3B3] rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            name="text"
            placeholder="Enter Phone Number"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="******************"
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>

      {/* distric and divition  */}
      <div className="flex flex-wrap -mx-3 mb-6">
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
            // options={results}
            options={teamList}
            // onBlur={handleBlur}
            className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
      </div>

      <button
        className="bg-green-400 py-2 px-4 float-right rounded-lg my-4 w-28 "
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateUserForm;
