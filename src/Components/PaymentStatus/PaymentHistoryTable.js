import React, { useState } from "react";
import PaymentModal from "./PaymentModal/PaymentModal";

const mockData = [
  {
    id: 13254,
    requestAmount: 4000,
    requestedDate: "13 -6 - 2022",
    paymentDisverse: 300,
    paymentDisverseDate: "12 - 6 - 2022",
    totalDisversementTime: 5,
  },
  {
    id: 13254,
    requestAmount: 4000,
    requestedDate: "13 -6 - 2022",
    paymentDisverse: 300,
    paymentDisverseDate: "12 - 6 - 2022",
    totalDisversementTime: 5,
  },
  {
    id: 13254,
    requestAmount: 4000,
    requestedDate: "13 -6 - 2022",
    paymentDisverse: 300,
    paymentDisverseDate: "12 - 6 - 2022",
    totalDisversementTime: 5,
  },
  {
    id: 13254,
    requestAmount: 4000,
    requestedDate: "13 -6 - 2022",
    paymentDisverse: 300,
    paymentDisverseDate: "12 - 6 - 2022",
    totalDisversementTime: 5,
  },
  {
    id: 13254,
    requestAmount: 4000,
    requestedDate: "13 -6 - 2022",
    paymentDisverse: 300,
    paymentDisverseDate: "12 - 6 - 2022",
    totalDisversementTime: 5,
  },
];

const PaymentHistoryTable = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

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
                  Requested Amount
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Requested Date
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Payment disverse
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Payment disverse Date
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Total Disversement Time
                </th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Status
                </th>
                {/* <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Action
                </th> */}
              </tr>
            </thead>

            <tbody className="bg-white">
              {data &&
                data.map((item, index) => (
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 w-3">
                      <div className="text-sm leading-5 text-gray-500">
                        {index + 1}
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {item?.amount}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {"N/A"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                        {"N/A"}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        {item?.payment_disbursed_date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        <h1>
                          {" "}
                          {item?.payment_disbursed_time}{" "}
                          <span> Working hr</span>
                        </h1>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                        {item?.status}
                      </span>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">
                        <button
                          onClick={() => {
                            setShowModal(true);
                          }}
                          className=" rounded-lg px-3 py-1 text-white bg-green-400"
                        >
                          Payment Confirmation
                        </button>
                      </div>
                    </td> */}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <PaymentModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default PaymentHistoryTable;
