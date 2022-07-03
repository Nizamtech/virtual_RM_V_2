import React, { useEffect, useState } from "react";
import VrmListTable from "./VrmListTable";
import axios from "axios";
import Swal from "sweetalert2";

const VRMList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/agent/register/`).then((res) => {
      setUsers(res.data.results);
    });
  }, []);

  const deleteAlert = (api, id) => {
    console.log(api + id);
    console.log(id);
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
  console.log(users);
  return (
    <div className=" h-screen p-3 m2">
      <VrmListTable deleteAlert={deleteAlert} users={users} />
    </div>
  );
};

export default VRMList;
