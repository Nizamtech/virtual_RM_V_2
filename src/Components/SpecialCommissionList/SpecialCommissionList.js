import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const api = `${process.env.REACT_APP_HOST_URL}/api/agent/commission/`;

const SpecialCommissionList = ({ data }) => {
  const [commissions, setCommission] = useState([]);
  const [value, setValue] = useState("all");
  const [api, setApi] = useState("api/agent/commission");

  useEffect(() => {
    if (data) {
      setCommission(data);
      console.log("in", commissions);
    } else {
      axios.get(`${process.env.REACT_APP_HOST_URL}/${api}`).then((res) => {
        setCommission(res.data.results);
      });
    }
  }, [data, api]);

  const handleChange = (e) => {
    const { value } = e.target;
    let URL;

    if (value === "all") {
      URL = "api/agent/commission/";
    } else URL = `api/agent/commission/?${`product_type=${value}`}`;
    console.log(URL);
    setApi(URL);
  };

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
        axios.delete(`${api}/${id}`).then((res) => {
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
      <div className=" flex justify-between items-center mx-4 mt-5">
        <h1 className=" text-lg text-gray-500">Special Commission</h1>
        <select
          onChange={handleChange}
          className=" h-10 p-2 border border-gray-300 focus:border-0"
          name="Special Commission"
        >
          <option value="all">All</option>
          <optgroup label="Loan">
            <option value="Personal Loan">Personal Loan</option>
            <option value="Home Loan">Home Loan</option>
            <option value="Car Loan">Car Loan</option>
          </optgroup>
          <optgroup label="Credit Card">
            <option value="Classic">Classic</option>
            <option value="Paltunum">Paltunum</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
          </optgroup>
        </select>
      </div>
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
                    User Name
                  </th>
                  <th className=" px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Expire Date
                  </th>
                  <th className=" px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center  text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Product Type
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
                          {item?.agent_name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap  border-gray-200 ">
                        <div className="text-sm leading-5 text-gray-500">
                          {item?.expire_date}
                        </div>
                      </td>

                      <td>
                        {item?.commission?.map((i) => (
                          <div className="px-6 py-4 whitespace-no-wrap  border-gray-200 flex justify-center items-center">
                            <div className="text-sm leading-5 text-gray-500">
                              {i?.product_type}
                            </div>
                          </div>
                        ))}
                      </td>
                      {/* <td>
                        {item?.commission?.map((i) => (
                          <div className="px-6 py-4 whitespace-no-wrap  border-gray-200 flex justify-center items-center">
                            <div className="text-sm leading-5 text-gray-500">
                              {i?.from}
                            </div>
                          </div>
                        ))}
                      </td>
                      <td>
                        {item?.commission?.map((i) => (
                          <div className="px-6 py-4 whitespace-no-wrap  border-gray-200 flex justify-center items-center">
                            <div className="text-sm leading-5 text-gray-500">
                              {i?.to}
                            </div>
                          </div>
                        ))}
                      </td>
                      <td>
                        {item?.commission?.map((i) => (
                          <div className="px-6 py-4 whitespace-no-wrap border-gray-200 flex justify-center items-center">
                            <div className="text-sm leading-5 text-gray-500">
                              {i?.commission}
                            </div>
                          </div>
                        ))}
                      </td> */}

                      <td className=" flex justify-center items-center  px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-gray-200">
                        <Link to={`/scview/${item.agent}`}>
                          <FontAwesomeIcon icon={faEye} className="h-6 w-6" />
                        </Link>
                        <Link
                          className="mx-2"
                          to={`/specialcommissionedit/${item?.id}`}
                        >
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

export default SpecialCommissionList;
