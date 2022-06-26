import React, { useEffect, useState } from "react";
import Table from "../../Shared/Table/Table";
import { useParams } from "react-router-dom";
import { teamData } from "../../MockData/MockTeam";
import Table2 from "./Table2";

const Catalogues = [
  {
    id: "01",
    name: "View",
  },
  {
    id: "02",
    name: "Add",
  },
  {
    id: "03",
    name: "Change",
  },
  {
    id: "04",
    name: "Delete",
  },
];
const CreateTeam = () => {
  const { id } = useParams();

  const teamSingleData = teamData?.find((item) => item.id == id);

  const handleSubmit = () => {};
  return (
    <div className=" h-screen p-3">
      <form onSubmit={handleSubmit}>
        {/* <h1 className=" text-2xl text-gray-500">Create Team</h1> */}
        {/* name  */}
        <div className=" mx-2 p-2 mt-1 ">
          <h1 className="mx-2 text-lg my-1 text-[#1E40AF] font-medium">
            Team Name
          </h1>
          <input
            className=" w-full h-12 ml-1 px-4 rounded-md"
            type="text"
            name="name"
            id=""
            placeholder="Name"
            defaultValue={teamSingleData ? teamSingleData?.team_name : ""}
          />
        </div>
        {/* name end  */}
        <div className=" mx-2 p-2 mt-1 ">
          <h1 className="mx-2 text-lg my-1 text-[#1E40AF] font-medium">
            Permission
          </h1>
          {id ? <Table module={teamSingleData?.module} /> : <Table2 />}
        </div>
        <button
          className="bg-green-400 py-2 px-4 float-right rounded-lg my-4 w-28 mr-3 text-white "
          type="submit"
        >
          SAVE
        </button>
      </form>
    </div>
  );
};

export default CreateTeam;
