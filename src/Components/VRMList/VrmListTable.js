import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { deleteAlert } from "../../Shared/Alert/deleteAlert";
import { Link } from "react-router-dom";
const VrmListTable = ({ data }) => {
  return (
    <div className="flex flex-col mt-8">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead className=" bg-black text-white">
              <tr>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  uppercase border-b border-gray-200 ">
                  Name
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  uppercase border-b border-gray-200 ">
                  Status
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  uppercase border-b border-gray-200 ">
                  Joing Date
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  uppercase border-b border-gray-200 ">
                  Last Active date
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  uppercase border-b border-gray-200 ">
                  Total Lead
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  uppercase border-b border-gray-200 ">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                  <div className="text-sm leading-5 text-gray-500">Mr Jhon</div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="ml-4">
                    <div className="text-sm font-medium leading-5 text-gray-900">
                      Active
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-500">
                    22/6/2022
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-500">
                    22/6/2022
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-500">150</div>
                </td>
                <td className=" flex justify-between px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
                  <button>
                    {" "}
                    <FontAwesomeIcon icon={faEye} className="h-6 w-6" />
                  </button>
                  <Link to={`/`}>
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
                  </Link>
                  <button onClick={() => deleteAlert()}>
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VrmListTable;
