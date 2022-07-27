import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const api = `${process.env.REACT_APP_HOST_URL}/api/loan_commission/`;

const LoanCommissionView = () => {
  const { id } = useParams();
  const [commissions, setCommission] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST_URL}/api/loan_commission/${id}`)
      .then((res) => {
        setCommission([res.data]);
      });
  }, [id]);

  console.log(commissions);

  const deleteAlert = (api, id) => {
    console.log(api + id);
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${api}${id}/`).then((res) => {
          if (res.status === 204) {
            const rest = commissions.filter((item) => item.id !== id);
            setCommission(rest);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
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
                      Institute Name
                    </th>
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Loan Type
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
                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {commissions &&
                    commissions.map((item, index) => (
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
                                {item?.bank_name}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {item?.product_type?.map((i) => (
                            <div className="text-sm leading-5 text-gray-500">
                              {i?.product_type}
                            </div>
                          ))}
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {item?.product_type?.map((i) => (
                            <div className="text-sm leading-5 text-gray-500">
                              {i?.from}
                            </div>
                          ))}
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {item?.product_type?.map((i) => (
                            <div className="text-sm leading-5 text-gray-500">
                              {i?.to}
                            </div>
                          ))}
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          {item?.product_type?.map((i) => (
                            <div>
                              <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                {i?.commission}
                              </span>
                            </div>
                          ))}
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-500 flex justify-around">
                            <Link to={`/viewloan/${item?.id}`}>
                              <FontAwesomeIcon
                                icon={faEye}
                                className="h-6 w-6"
                              />
                            </Link>
                            <Link to={`/editloan/${item?.id}`}>
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
                            <button onClick={() => deleteAlert(api, item?.id)}>
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
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCommissionView;
