import React from "react";
import { Link } from "react-router-dom";
import VRMCommissionList from "../VRMCommission/VRMCommissionList";

const Commission = ({ data }) => {
  return (
    <div className=" m-3 p-3">
      <Link
        to={`/vrmedit/${data?.id}`}
        className=" bg-green-400 float-right right-10 relative py-2 px-4 text-white rounded-lg"
      >
        Add special Commission
      </Link>
      <VRMCommissionList />
    </div>
  );
};

export default Commission;
