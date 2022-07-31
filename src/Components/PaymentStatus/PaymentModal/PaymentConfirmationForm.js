import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentConfirmationForm = ({
  id,
  status,
  setStatus,
  setShowModal,
  data,
}) => {
  const router = useNavigate();
  const [paymentReqData, setPaymentReqData] = useState({});
  const [transactionId, setTransactionId] = useState(null);
  const [image, setImage] = useState(null);

  // console.log("paymentReqData", paymentReqData?.created_at);
  const created_Date = new Date(paymentReqData?.created_at);
  const today = new Date();
  // const totalDay = today.setDate(today.getDate - created_Date);

  const total_time = today.getTime() - created_Date.getTime();
  const total_day = Math.trunc(total_time / (1000 * 3600 * 24));

  useEffect(() => {
    setPaymentReqData(data);
  }, [id, data]);

  console.log(id, paymentReqData);
  const handleChange = (e) => {
    const { name } = e.target;
    console.log(name);
    if (name === "transactionId") {
      setTransactionId(e.target.value);
    }
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData;

    const loadData = async () => {
      if (transactionId) {
        newData = {
          status: status,
          transaction_id: transactionId,
          payment_disbursed_date: created_Date?.toLocaleDateString(),
          total_hr: total_day,
        };
      }
      if (image) {
        newData = new FormData();
        newData.append("pay_slip", image);
        newData.append("status", status);
        newData.append(
          "payment_disbursed_date",
          created_Date?.toLocaleDateString()
        );
        newData.append(" total_hr", total_day);
      }

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const res = await axios.patch(
        `${process.env.REACT_APP_HOST_URL}/api/payment/${id}/`,
        newData,
        `${image && config}`
      );
      if (res.status === 200) {
        setStatus(null);
        setPaymentReqData(data);
        router("/paymentstatus");
      }
      console.log(res);
    };
    loadData();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="mt-2 block mb-2 text-base font-medium text-gray-900 dark:text-gray-400">
          Status
        </label>
        <select
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          id="large"
          className="block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Select</option>
          <option value="Confirm">Confirm</option>
          <option value="Pemding">Pending</option>
        </select>
      </div>

      {/* mobile Banking  */}
      {status === "Confirm" &&
        (paymentReqData?.request_method?.payment_method === "bkash" ||
          paymentReqData?.request_method?.payment_method === "Nagad") && (
          <div className=" mt-2">
            <div className=" my-2">
              <div className=" mb-3">
                <h1 className=" block mb-2 text-base font-medium text-gray-900 dark:text-gray-400">
                  Payment Method{" "}
                </h1>
                <span>
                  <span className=" px-3  py-1 rounded bg-green-400 my-2 text-white">
                    {paymentReqData?.request_method?.payment_method}
                  </span>
                  <span className="mx-4">
                    {paymentReqData?.request_method?.mobile_number}
                  </span>
                </span>
              </div>
            </div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Transaction ID
            </label>
            <input
              onChange={handleChange}
              name="transactionId"
              type="text"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Transaction ID "
            />
          </div>
        )}
      {/* bank  */}
      {status === "Confirm" &&
        paymentReqData?.request_method?.payment_method === "Bank" && (
          <div className="mt-3 ">
            <div className=" my-2">
              <div className=" mb-3">
                <h1 className=" block mb-2 text-base font-medium text-gray-900 dark:text-gray-400">
                  Payment Method{" "}
                </h1>
                <span className=" px-3  py-1 rounded bg-green-400 my-2 text-white">
                  {paymentReqData?.request_method?.payment_method}
                </span>
              </div>
              <h1>
                <span className=" font-bold "> Account Holder Name:</span>{" "}
                {paymentReqData?.request_method?.Account_Holder_Name}{" "}
              </h1>
              <h1>
                <span className=" font-bold ">Bank Name:</span>{" "}
                {paymentReqData?.request_method?.bank_name}{" "}
              </h1>
              <h1>
                <span className=" font-bold "> Bank Account Number:</span>{" "}
                {paymentReqData?.request_method?.Bank_Account_Number}{" "}
              </h1>
              <h1>
                <span className=" font-bold "> Branch Name: </span>{" "}
                {paymentReqData?.request_method?.Branch_Name}{" "}
              </h1>
            </div>
            <label
              for="formFile"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Pay Slip Upload
            </label>
            <input
              name="paySlip"
              onChange={handleChange}
              className="form-control  block w-full  px-3py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              type="file"
              id="formFile"
            />
          </div>
        )}
      {status === "Confirm" && (
        <button
          type="submit"
          className=" mt-4 text-white bg-green-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      )}
    </form>
  );
};

export default PaymentConfirmationForm;
