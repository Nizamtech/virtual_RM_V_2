import React, { useEffect, useState } from "react";
import Select from "react-select";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";

const NewVRM = () => {
  const router = useNavigate();
  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(`${process.env.REACT_APP_HOST_URL}/api/agent/register/`, user)
      .then((response) => {
        if (response.status === 201) {
          SuccessAlert("User Created", "success");
          router("/vrmlist");
        }
      })
      .catch((error) => {
        SuccessAlert(error.message, "error");
      });
  };

  const handleBlur = (e) => {
    const newData = { ...user };
    newData[e.target.name] = e.target.value;
    setUser(newData);
  };

  return (
    <div className=" h-screen m-3 p-3 ">
      <HeadingTitle title="Add New VRM" />
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
              type="number"
              name="username"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
              }}
              maxlength="11"
              placeholder="01X0000000"
              required
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
              onBlur={handleBlur}
            />
          </div>
        </div>

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
              name="first_name"
              required
              onBlur={handleBlur}
              placeholder=" First Name"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full  text-gray-700 border border-[#B3B3B3] rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              name="last_name"
              onBlur={handleBlur}
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Phone
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-[#B3B3B3] rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              name="phone"
              onInput={(e) => {
                if (e.target.value.length > e.target.maxLength)
                  e.target.value = e.target.value.slice(0, e.target.maxLength);
              }}
              maxlength="11"
              required
              onBlur={handleBlur}
              placeholder="01X0000000"
            />
            {/* <p className="text-red-500 text-xs italic">
        Please fill out this field.
      </p> */}
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
              maxLength={11}
              onBlur={handleBlur}
              placeholder="******************"
            />
          </div>
        </div>

        {/* <div className="flex flex-wrap -mx-3 mb-6">
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
              onChange={setTeamName}
              options={teamData}
              className="w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
        </div> */}

        <button
          className="bg-green-400 py-3 px-4 float-right rounded-lg my-4 w-32 text-white text-lg "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewVRM;
