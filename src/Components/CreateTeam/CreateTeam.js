import React from "react";
import Table from "../../Shared/Table/Table";

const CreateTeam = () => {
  return (
    <div className=" h-screen p-3">
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
        />
      </div>
      {/* name end  */}
      <div className=" mx-2 p-2 mt-1 ">
        <h1 className="mx-2 text-lg my-1 text-[#1E40AF] font-medium">
          Permission
        </h1>
        <Table />
      </div>
    </div>
  );
};

export default CreateTeam;
