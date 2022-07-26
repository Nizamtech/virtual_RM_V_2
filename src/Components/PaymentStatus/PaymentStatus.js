import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import PaymentStatusTable from "./PaymentStatusTable";

const PaymentStatus = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/api/payment/?status=Confirm`
      );
      setData(res?.data?.results);
    };
    loadData();
  }, []);

  return (
    <div className=" h-screen m-3 p-3">
      <PaymentStatusTable data={data} />
    </div>
  );
};

export default PaymentStatus;
