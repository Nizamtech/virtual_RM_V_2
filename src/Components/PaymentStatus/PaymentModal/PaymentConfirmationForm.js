import React from "react";

const PaymentConfirmationForm = ({ setShowModal }) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Transaction ID
      </label>
      <input
        type="text"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Transaction ID "
      />
      <label
        for="large"
        className="mt-2 block mb-2 text-base font-medium text-gray-900 dark:text-gray-400"
      >
        Status
      </label>
      <select
        id="large"
        className="block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Select</option>
        <option value="US">Confirm</option>
        <option value="CA">Pending</option>
      </select>
      <button
        onClick={() => setShowModal(false)}
        type="button"
        className=" mt-4 text-white bg-green-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </div>
  );
};

export default PaymentConfirmationForm;
