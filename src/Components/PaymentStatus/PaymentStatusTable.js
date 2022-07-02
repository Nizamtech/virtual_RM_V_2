import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const mockData = [
  {
    id: 13254,
    agentName: "Jamal",
    totalEarned: 40000,
    pendingMoney: 40000,
    requestedMoney: 30000,
  },
  {
    id: 13254,
    agentName: "Jamal",
    totalEarned: 40000,
    pendingMoney: 40000,
    requestedMoney: 30000,
  },
  {
    id: 13254,
    agentName: "Jamal",
    totalEarned: 40000,
    pendingMoney: 40000,
    requestedMoney: 30000,
  },
  {
    id: 13254,
    agentName: "Jamal",
    totalEarned: 40000,
    pendingMoney: 40000,
    requestedMoney: 30000,
  },
  {
    id: 13254,
    agentName: "Jamal",
    totalEarned: 40000,
    pendingMoney: 40000,
    requestedMoney: 30000,
  },
  {
    id: 13254,
    agentName: "Jamal",
    totalEarned: 40000,
    pendingMoney: 40000,
    requestedMoney: 30000,
  },
  {
    id: 13254,
    agentName: "Jamal",
    totalEarned: 40000,
    pendingMoney: 40000,
    requestedMoney: 30000,
  },
  {
    id: 13254,
    agentName: "Jamal",
    totalEarned: 40000,
    pendingMoney: 40000,
    requestedMoney: 30000,
  },
  {
    id: 13254,
    agentName: "Jamal",
    totalEarned: 40000,
    pendingMoney: 40000,
    requestedMoney: 30000,
  },
];

const PaymentStatusTable = ({ data }) => {
  return (
    <div className="flex flex-col mt-8">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full overflow-scroll">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  # ID
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Agent Name
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Total Eaned
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Pending Money
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Requested Money
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {mockData &&
                mockData.map((item, index) => (
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 w-3">
                      <div className="text-sm leading-5 text-gray-500">
                        {item?.id}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {item?.agentName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {item?.totalEarned}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                        {item?.pendingMoney}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {item?.requestedMoney}
                      </div>
                    </td>
                    <td className=" flex  px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
                      <Link to="/paymenthistory" className=" mx-2">
                        {" "}
                        <FontAwesomeIcon icon={faEye} className="h-6 w-6" />
                      </Link>
                      <Link to={`/manageuser/${item.id}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-blue-400 ml-3 "
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
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentStatusTable;
