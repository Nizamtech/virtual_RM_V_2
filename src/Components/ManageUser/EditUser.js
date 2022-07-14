import React, { useEffect, useState } from "react";
import Select from "react-select";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const EditUser = ({ data, deleteAlert, id }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const defVAlue = [data?.team];

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

    const userdata = {
      username: user.username || data.username,
      email: user.email || data.email,
      password: user.password || data.password,
      phone: user.phone || data.phone,
      team: team?.value || data.team,
    };
    console.log(userdata);
    axios
      .put(`http://localhost:8000/api/user/register/${id}/`, userdata)
      .then((response) => {
        if (response.status === 200) {
          SuccessAlert("Your work has been Updated", "success");
          navigate(-1);
        } else SuccessAlert("something Wrong", "error");
      });
  };

  return (
    <form onSubmit={handleSubmit} className=" mx-2">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-[#B3B3B3] rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            name="username"
            placeholder="Jane"
            required
            defaultValue={data?.username}
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
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full  px-3 mb-6 md:mb-0">
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
            placeholder="Phone Number"
            onInput={(e) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength);
            }}
            maxlength="11"
            required
            defaultValue={data?.phone}
            onBlur={handleBlur}
          />
          {/* <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p> */}
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full  px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Team
          </label>
          <Select
            placeholder={data?.team}
            required
            name="team"
            onChange={setTeam}
            options={teamList}
            // onBlur={handleBlur}
            className="  w-full border-nonetext-gray-700  rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
      </div>

      <button
        className="bg-green-400 py-3 px-4 float-right rounded-lg my-4 w-32 text-white text-lg "
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default EditUser;
