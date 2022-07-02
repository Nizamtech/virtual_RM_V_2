import React, { useEffect, useState } from "react";
import VrmListTable from "./VrmListTable";
import axios from "axios";

const VRMList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/accounts/agent/register/`).then((res) => {
      setUsers(res.data.results);
    });
  }, []);
  console.log(users);
  return (
    <div className=" h-screen p-3 m2">
      <VrmListTable users={users}/>
    </div>
  );
};

export default VRMList;
