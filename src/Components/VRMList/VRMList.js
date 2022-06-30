import React from "react";
import { Link } from "react-router-dom";
import VrmListTable from "./VrmListTable";

const VRMList = () => {
  return (
    <div className=" h-screen p-3 m2">
      <div className=" absolute right-12  bg-green-400 px-4 py-2 rounded-lg text-white font-bold">
        {" "}
        <Link to={"/newagent"}>New Agent</Link>
      </div>

      <div className="  relative mx-2 mt-10">
        <VrmListTable />
      </div>
    </div>
  );
};

export default VRMList;
