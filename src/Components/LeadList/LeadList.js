import React from "react";
import LeadListFilter from "./LeadListFilter";
import LeadListTable from "./LeadListTable";

const LeadList = () => {
  return (
    <div className=" h-screen mx-3 p-3">
      <LeadListFilter />
      <LeadListTable />
    </div>
  );
};

export default LeadList;
