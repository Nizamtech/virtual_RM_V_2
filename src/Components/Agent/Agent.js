import React from "react";
import AgentForm from "./AgentForm";

const Agent = () => {
  return (
    <div className=" h-screen m-3 p-3">
      <div className="myShadow8 bg-gray-100 pb-4 rounded-lg">
        <div className=" flex flex-col mx-auto lg:mx-4 my-3">
          <label className=" ml-2 text-lg mb-2 mt-2">Name</label>
          <input
            className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
            type="text"
            name="name"
            placeholder=" Name"
          />
        </div>
        <div className=" flex flex-col mx-auto lg:mx-4 my-3">
          <label className=" ml-2 text-lg mb-2 text-">Email</label>
          <input
            className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
            type="email"
            name="name"
            placeholder=" Name"
          />
        </div>
        <div className=" flex flex-col mx-auto lg:mx-4 my-3">
          <label className=" ml-2 text-lg mb-2 text-">Mobile</label>
          <input
            className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
            type="text"
            maxLength={11}
            name="name"
            placeholder=" Name"
          />
        </div>
        <div className=" flex flex-col mx-auto lg:mx-4 my-3">
          {/* <label className=" ml-2 text-lg mb-2 text-">location</label> */}
          <fieldset>
            {/* <legend className=" ml-2 text-lg mb-2 ">location</legend> */}
            <div className=" grid grid-cols-2 bg-white">
              <div className=" flex  justify-start items-center border-r rounded">
                <label className="   h-full  px-4 bg-gray-300 text-lg flex justify-center items-center text-gray-600   ">
                  District
                </label>
                <input
                  className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300   "
                  type="text"
                  name="name"
                  placeholder=" Name"
                />
              </div>
              <div className=" flex justify-start items-center border-l rounded">
                <label className=" h-full px-4  bg-gray-300  text-lg flex justify-center items-center text-gray-600  ">
                  Sub District
                </label>
                <input
                  className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300   "
                  type="text"
                  name="name"
                  placeholder=" Name"
                />
              </div>
            </div>
            <input
              className=" bg-green-400 py-1 px-4 rounded text-white text-lg mt-4 float-right"
              type="submit"
              value="SAVE"
            />
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Agent;
