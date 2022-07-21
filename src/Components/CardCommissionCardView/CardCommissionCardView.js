import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const api = `${process.env.REACT_APP_HOST_URL}/api/card_commission/`;

const CardCommissionCardView = () => {
  const { id } = useParams();
  const [commissions, setCommission] = useState([]);
  console.log(commissions);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST_URL}/api/card_commission/${id}/`)
      .then((res) => {
        setCommission([res.data]);
      });
  }, [id]);

  const deleteAlert = (api, id) => {
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
            const rest = commissions?.filter((item) => item?.id !== id);
            setCommission(rest);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

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
                  <th className=" px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Institute Name
                  </th>
                  <th className=" px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center  text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Card Name
                  </th>
                  <th className=" px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center  text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    From
                  </th>
                  <th className=" px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center  text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    To
                  </th>
                  <th className=" px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center  text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Commission
                  </th>
                  <th className=" px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {commissions &&
                  commissions?.map((item, index) => (
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-no-wrap  border-gray-200 w-3">
                        <div className="text-sm leading-5 text-gray-500">
                          {index + 1}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap  border-gray-200 ">
                        <div className="text-sm leading-5 text-gray-500">
                          {item?.bank_name}
                        </div>
                      </td>

                      <td>
                        {item?.product_type?.map((i) => (
                          <div className="px-6 py-4 whitespace-no-wrap  border-gray-200 flex justify-center items-center">
                            <div className="text-sm leading-5 text-gray-500">
                              {i?.product_type}
                            </div>
                          </div>
                        ))}
                      </td>
                      <td>
                        {item?.product_type?.map((i) => (
                          <div className="px-6 py-4 whitespace-no-wrap  border-gray-200 flex justify-center items-center">
                            <div className="text-sm leading-5 text-gray-500">
                              {i?.from}
                            </div>
                          </div>
                        ))}
                      </td>
                      <td>
                        {item?.product_type?.map((i) => (
                          <div className="px-6 py-4 whitespace-no-wrap  border-gray-200 flex justify-center items-center">
                            <div className="text-sm leading-5 text-gray-500">
                              {i?.to}
                            </div>
                          </div>
                        ))}
                      </td>
                      <td>
                        {item?.product_type?.map((i) => (
                          <div className="px-6 py-4 whitespace-no-wrap border-gray-200 flex justify-center items-center">
                            <div className="text-sm leading-5 text-gray-500">
                              {i?.commission}
                            </div>
                          </div>
                        ))}
                      </td>

                      <td className=" flex justify-center items-center  px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
                        {/* <Link to={`/cclistview/${item?.id}`}>
                          <FontAwesomeIcon
                            icon={faEye}
                            className="h-6 w-6 mx-2"
                          />
                        </Link> */}

                        <Link to={`/cclist/${item?.id}`}>
                          {/* to={`/cclist/${item?.id} query: ${"name"}`} */}
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
                        <button
                          onClick={() => deleteAlert(api, item?.id)}
                          className="mx-2"
                        >
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

export default CardCommissionCardView;
