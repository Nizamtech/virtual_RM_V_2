import axios from "axios";
import React, { useEffect, useState } from "react";
import PaymentRequestTable from "./PaymentRequestTable";

const PaymentRequest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/api/payment/?status=Pending`
      );
      setData(res?.data.results);
    };
    loadData();
  }, []);

  return (
    <div className=" h-screen m-3 p-3">
      <PaymentRequestTable data={data} />
    </div>
  );
};

export default PaymentRequest;
