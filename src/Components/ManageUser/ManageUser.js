import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";
import { Link, useParams } from "react-router-dom";
import EditUser from "./EditUser";
import Swal from "sweetalert2";
import axios from "axios";
import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const { userId } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST_URL}/api/user/register/`)
      .then((res) => {
        setUser(res.data.results);
      });
  }, []);

  const singleUser = userId && users.find((item) => item?.id == userId);

  useEffect(() => {
    const loadUsers = async () => {
      const userData = await fetch(
        `${process.env.REACT_APP_HOST_URL}/api/user/register/`
      );
      const rest = await userData.json();
      setUsers(rest?.results);
    };
    loadUsers();
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
          .delete(`${process.env.REACT_APP_HOST_URL}/api/user/register/${id}`)
          .then((res) => {
            if (res.status === 204) {
              const singleUser = users?.filter((item) => item?.id !== id);

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
        <>
          <HeadingTitle title="Edit User" />

          <EditUser data={singleUser} id={userId} />
        </>
      ) : (
        <>
          <div className=" flex justify-between items-center">
            <HeadingTitle title="User List" />
            <Link
              className=" bg-green-400 rounded-lg px-6 py-2 text-white"
              to="/createuser"
            >
              Create User{" "}
            </Link>
          </div>

          <UserTable deleteAlert={deleteAlert} data={users} />
        </>
      )}
    </div>
  );
};

export default ManageUser;
