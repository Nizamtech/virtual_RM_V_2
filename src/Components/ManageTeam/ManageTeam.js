import React, { useEffect, useState } from "react";
import axios from "axios";
import DataShowTable from "../../Shared/Table/DataShowTable";
import Swal from "sweetalert2";
import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";
import { Link } from "react-router-dom";

const ManageTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const handleDelete = (e) => {
    deleteAlert(e.id);
  };

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/api/team/`
      );
      const data = await res.data;
      setTeamData(data?.results);
    };
    loadData();
  }, []);

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
          .delete(`${process.env.REACT_APP_HOST_URL}/api/team/${id}`)
          .then((res) => {
            if (res.status === 204) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const restdata = teamData?.filter((item) => item.id !== id);
              setTeamData(restdata);
            }
          });
      }
    });
  };

  return (
    <div className=" h-screen p-3">
      {/* <h1 className=" ml-2 text-2xl text-gray-500 mt-3"> Team List </h1> */}
      <div className=" flex justify-between items-center">
        <h1 className=" ml-2 text-2xl text-gray-500 mt-3"> Team List </h1>
        <Link
          className=" bg-green-400 rounded-lg px-6 py-2 text-white"
          to="/createteam"
        >
          Create Team
        </Link>
      </div>
      <DataShowTable handleDelete={handleDelete} item={teamData} />
    </div>
  );
};

export default ManageTeam;
