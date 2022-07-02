import React, { useEffect, useState } from "react";
import { teamData } from "../../MockData/MockTeam";
import axios from "axios";
import DataShowTable from "../../Shared/Table/DataShowTable";
import Swal from "sweetalert2";

const deleteAlert = (id) => {
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
      axios.delete(`http://127.0.0.1:8000/api/team/${id}`).then((res) => {
        if (res.status === 204) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  });
};

const ManageTeam = () => {
  const handleDelete = (e) => {
    deleteAlert(e.id);
  };

  return (
    <div className=" h-screen p-3">
      <DataShowTable handleDelete={handleDelete} item={teamData} />
    </div>
  );
};

export default ManageTeam;
