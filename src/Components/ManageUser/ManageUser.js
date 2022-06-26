import React from "react";
import { userData } from "../../MockData/userData";
import UserTable from "./UserTable";
import { useParams } from "react-router-dom";
import EditUser from "./EditUser";
import UserForm from "../CreateUser/UserForm";
import CreateUser from "../CreateUser/CreateUser";
const ManageUser = () => {
  const { userId } = useParams();

  const singleUser = userId && userData.find((item) => item?.id == userId);
  console.log(singleUser);
  return (
    <div className=" h-screen p-3 overflow-scroll scroll ">
      {userId ? <EditUser data={singleUser} /> : <UserTable data={userData} />}
    </div>
  );
};

export default ManageUser;
