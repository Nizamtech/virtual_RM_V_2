import axios from "axios";
import React, { useEffect, useState } from "react";
import { deleteAlert } from "../../Shared/Alert/deleteAlert";

const CardCommissionList = () => {
  const [commissions, setCommission] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/benefit/card_commision/list/`)
      .then((res) => {
        setCommission(res.data.results);
      });
  }, []);
  console.log(commissions);
  return (
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
                    Institute Name
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Card Name
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    From
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    To
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Commission
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {commissions &&
                  commissions?.commissionn?.map((item, index) => (
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 w-3">
                        <div className="text-sm leading-5 text-gray-500">
                          {index + 1}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium leading-5 text-gray-900">
                              {item?.institute_name}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-500">
                          {item?.card_type}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          {item?.from}
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 text-gray-500">
                          {item?.to}
                        </div>
                      </td>
                      <td className=" flex justify-between px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
                        <div className="text-sm leading-5 text-gray-500">
                          {item?.commission}
                        </div>
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
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCommissionList;
