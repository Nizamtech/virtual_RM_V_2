import React from "react";
import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";
import SubmittedLeadTable from "./SubmittedLeadTable";
const data = [
  {
    id: 11368,
    code: "UCB-22070002",
    application_type: 1,
    application_type_name: "Credit Card",
    status: 0,
    status_name: "New",
    bank_status: null,
    bank_status_name: null,
    name: "Israt Jahan",
    mobile: "01980659577",
    profession_type: 1,
    profession_type_name: "Salaried",
    company: "Alive Apparels Ltd.",
    schedule: {
      date: null,
      slot: null,
    },
    application_followup: {
      team: [],
      user: "Aamartaka Admin",
      status: null,
    },
    assign_member: {
      name: "Aamartaka Admin",
      zone: null,
      team: "",
    },
    life_time: "16 days",
    bank_life_time: null,
    application_tag: null,
    forwarded_on: null,
  },
  {
    id: 11369,
    code: "SEBL-22070002",
    application_type: 1,
    application_type_name: "Credit Card",
    status: 0,
    status_name: "New",
    bank_status: null,
    bank_status_name: null,
    name: "John",
    mobile: "01776960966",
    profession_type: 1,
    profession_type_name: "Salaried",
    company: "Alive Apparels Ltd.",
    schedule: {
      date: null,
      slot: null,
    },
    application_followup: {
      team: [],
      user: "Aamartaka Admin",
      status: null,
    },
    assign_member: {
      name: "Aamartaka Admin",
      zone: null,
      team: "",
    },
    life_time: "16 days",
    bank_life_time: null,
    application_tag: null,
    forwarded_on: null,
  },
];
const SubmittedLead = () => {
  return (
    <div className="h-screen m-3 p-3">
      <HeadingTitle title="Submitted Lead" />
      <SubmittedLeadTable data={data} />
    </div>
  );
};

export default SubmittedLead;
