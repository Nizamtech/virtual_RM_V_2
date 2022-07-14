import React, { useEffect, useState } from "react";
import Select from "react-select";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
import axios from "axios";
import { useParams } from "react-router-dom";

const VRMListEdit = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const loadData = async () => {
      await fetch(`http://127.0.0.1:8000/api/agent/register/${id}/`)
        .then((response) => response.json())
        .then((res) => {
          const data = {
            username: res.username,
            phone: res.phone,
            email: res.email,
            password: res.password,
          };
          setUser(data);
        });
    };
    loadData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    await axios
      .put(`http://127.0.0.1:8000/api/agent/register/${id}/`, user)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          SuccessAlert("User Updated", "success");
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
    <div className=" h-screen m-3 p3">
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
              name="username"
              placeholder="Jane"
              required
              defaultValue={user?.username}
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
              defaultValue={user?.email}
              onBlur={handleBlur}
            />
          </div>
        </div>

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
            onInput={(e) => {
              if (e.target.value.length > e.target.maxLength)
                e.target.value = e.target.value.slice(0, e.target.maxLength);
            }}
            maxlength="11"
            required
            defaultValue={user?.phone}
            onBlur={handleBlur}
          />
        </div>

        <button
          className="bg-green-400 py-2 px-4 float-right rounded-lg my-4 w-40 text-white "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default VRMListEdit;
