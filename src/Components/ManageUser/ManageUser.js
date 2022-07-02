import React, { useEffect, useState } from "react";
import { userData } from "../../MockData/userData";
import UserTable from "./UserTable";
import { useParams } from "react-router-dom";
import EditUser from "./EditUser";
import UserForm from "../CreateUser/UserForm";
import CreateUser from "../CreateUser/CreateUser";
import Swal from "sweetalert2";
import axios from "axios";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const { userId } = useParams();

  const singleUser = userId && users.find((item) => item?.id == userId);

  useEffect(() => {
    const loadPermission = async () => {
      const content_type = await fetch(
        "http://127.0.0.1:8000/api/user/register/"
      );
      const rest = await content_type.json();
      setUsers(rest?.results);
    };

    loadPermission();
  }, [userId]);

  const deleteAlert = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://127.0.0.1:8000/api/user/register/${id}`)
          .then((res) => {
            if (res.status === 204) {
              const singleUser = users?.filter((item) => item?.id !== userId);
              setUsers(singleUser);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className=" h-screen p-3 overflow-scroll scroll ">
      {userId ? (
        <EditUser data={singleUser} id={userId} />
      ) : (
        <UserTable deleteAlert={deleteAlert} data={users} />
      )}
    </div>
  );
};

export default ManageUser;
