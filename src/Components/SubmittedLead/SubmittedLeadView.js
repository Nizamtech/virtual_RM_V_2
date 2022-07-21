import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const api = `${process.env.REACT_APP_HOST_URL}/api/loan_commission/`;

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
const SubmittedLeadView = () => {
  const { id } = useParams();
  const [submittedLead, setSubmittedLead] = useState([]);

  useEffect(() => {
    const rest = data?.find((item) => item?.id == id);
    console.log("rest", rest);
    setSubmittedLead(rest);
  }, [id]);

  console.log(submittedLead);
  return (
    <div className=" h-screen p-3 m-3">
      <div className=" h-screen p-3 m-3">
        <div className="flex flex-col mt-8">
          <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      #
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Application Type
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Name
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Mobile
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Status
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Company
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Profession Type
                    </th>

                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Follow Up
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Assign Member:
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 w-3">
                      <div className="text-sm leading-5 text-gray-500">{1}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="flex submittedLeads-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium leading-5 text-gray-900">
                            {submittedLead?.application_type_name}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {submittedLead?.name}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {submittedLead?.mobile}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {submittedLead?.status_name}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {submittedLead?.company}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                        {submittedLead?.profession_type_name}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {submittedLead?.application_followup?.user}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {submittedLead?.assign_member?.name}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500 flex justify-around">
                        {/* <Link to={`/slview/${submittedLead?.id}`}>
                              <FontAwesomeIcon
                                icon={faEye}
                                className="h-6 w-6"
                              />
                            </Link> */}
                        {/* <Link to={`/editloan/${submittedLead?.id}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 text-blue-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </Link> */}
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-red-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmittedLeadView;
