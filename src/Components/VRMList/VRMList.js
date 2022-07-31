import React, { useEffect, useState } from "react";
import VrmListTable from "./VrmListTable";
import axios from "axios";
import Swal from "sweetalert2";
import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";
import { Link } from "react-router-dom";

const VRMList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST_URL}/api/agent/register/`)
      .then((res) => {
        setUsers(res.data.results);
      });
  }, []);

  const deleteAlert = (api, id) => {
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
        axios.delete(`${api}${id}/`).then((res) => {
          if (res.status === 204) {
            const rest = users.filter((item) => item.id !== id);
            setUsers(rest);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className=" h-screen p-3 m2">
      <div className=" flex justify-between items-center">
        <HeadingTitle title="VRM User List" />
        <div>
          <Link
            to="/newvrm"
            className=" bg-green-400 rounded-lg text-white px-4 py-2"
          >
            {" "}
            New VRM
          </Link>
        </div>
      </div>
      <VrmListTable deleteAlert={deleteAlert} users={users} />
    </div>
  );
};

export default VRMList;
