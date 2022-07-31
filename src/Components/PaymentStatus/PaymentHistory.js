import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PaymentHistoryTable from "./PaymentHistoryTable";

const PaymentHistory = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [name, setName] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/api/payment/?agent=${id}`
      );

      const result = res?.data?.results;
      const singleUserData = result?.find((item) => item?.agent == id);
      setName(singleUserData);
      setData(res?.data?.results);
    };
    loadData();
  }, [id]);

  return (
    <div className=" h-screen m-3 p-3">
      <PaymentHistoryTable name={name} data={data} />
    </div>
  );
};

export default PaymentHistory;
