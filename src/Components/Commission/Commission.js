import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SpecialCommissionList from "../SpecialCommissionList/SpecialCommissionList";
import VRMCommissionList from "../VRMCommission/VRMCommissionList";

const Commission = ({ data }) => {
  const [commissions, setCommission] = useState([]);

  console.log(data?.id);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_HOST_URL}/api/agent/commission/?agent=${data?.id}`
      )
      .then((res) => {
        console.log("commission", res);
        setCommission(res.data.results);
      });
  }, [data?.id]);
  console.log("commissions", commissions, data);
  return (
    <div className=" h-screen overflow-scroll m-3 p-3">
      <Link
        to={`/specialcommission/${data?.id}`}
        className=" bg-green-400 float-right right-10 relative py-2 px-4 text-white rounded-lg"
      >
        Add special Commission
      </Link>
      <div className=" mt-5">
        {commissions.length > 0 ? (
          <SpecialCommissionList data={commissions} />
        ) : (
          <h1 className=" text-2xl text-red-500 grid place-content-center place-items-center">
            {" "}
            There is Special Commission{" "}
          </h1>
        )}
      </div>
      {/* <VRMCommissionList /> */}
    </div>
  );
};

export default Commission;
