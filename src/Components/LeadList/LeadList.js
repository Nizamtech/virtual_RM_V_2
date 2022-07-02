import React from "react";
import { Link } from "react-router-dom";
import LeadListFilter from "./LeadListFilter";
import LeadListTable from "./LeadListTable";

const LeadList = () => {
  return (
    <div className=" h-screen mx-3 p-3">
      <div className=" float-right bg-green-400 px-4 py-2 rounded-lg text-white font-bold">
        {" "}
        <Link to="/newlead">New Lead</Link>
      </div>
      <LeadListFilter />
      <LeadListTable />
    </div>
  );
};

export default LeadList;
