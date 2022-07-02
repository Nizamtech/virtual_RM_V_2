import React from "react";
import FeatureTable from "./FeatureTable";

const Feature = () => {
  return (
    <div className=" h-screen m-3 p-3">
      <div className=" absolute  right-14 bg-green-400 p-2 rounded-lg px-4 text-white font-bold">
        <h1>Add New Feature </h1>
      </div>

      <FeatureTable />
    </div>
  );
};

export default Feature;
