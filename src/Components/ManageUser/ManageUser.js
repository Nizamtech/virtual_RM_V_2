import React, { useEffect, useState } from "react";
import { userData } from "../../MockData/userData";
import UserTable from "./UserTable";
import { useParams } from "react-router-dom";
import EditUser from "./EditUser";
import axios from "axios";

const ManageUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/accounts/user/list/`).then((res) => {
      setUser(res.data.results);
    });
  }, []);

  const singleUser = userId && userData.find((item) => item?.id === userId);

  return (
    <div className=" h-screen p-3 overflow-scroll scroll ">
      {userId ? <EditUser data={singleUser} /> : <UserTable data={user} />}
    </div>
  );
};

export default ManageUser;
