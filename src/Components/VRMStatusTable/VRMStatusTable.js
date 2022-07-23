import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { deleteAlert } from "../../Shared/Alert/deleteAlert";
import { Link } from "react-router-dom";
const VRMStatusTable = ({ data }) => {
  return (
    <div className="flex flex-col mt-2">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead className=" bg-gray-300 ">
              <tr>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  uppercase border-b border-gray-200 ">
                  Status
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  uppercase border-b border-gray-200 ">
                  Status BY
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  uppercase border-b border-gray-200 ">
                  Created At
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  uppercase border-b border-gray-200 ">
                  Time
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left  uppercase border-b border-gray-200 ">
                  Remarks
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                  <div className="text-sm leading-5 text-gray-500">
                    {data?.status_name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="ml-4">
                    <div className="text-sm font-medium leading-5 text-gray-900">
                      {/* {data?.created_by} */} Admin
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-500">
                    {data?.created_at}
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-500">4:00 PM</div>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-500">
                    {data?.remarks}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VRMStatusTable;
