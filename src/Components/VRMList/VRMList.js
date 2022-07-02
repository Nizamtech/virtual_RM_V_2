import React, { useEffect, useState } from "react";
import VrmListTable from "./VrmListTable";
import axios from "axios";

const VRMList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/agent/register/`).then((res) => {
      setUsers(res.data.results);
    });
  }, []);
  console.log(users);
  return (
    <div className=" h-screen p-3 m2">
      <VrmListTable users={users} />
    </div>
  );
};

export default VRMList;
