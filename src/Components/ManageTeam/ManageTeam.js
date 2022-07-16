import React, { useEffect, useState } from "react";
import axios from "axios";
import DataShowTable from "../../Shared/Table/DataShowTable";
import Swal from "sweetalert2";

const ManageTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const handleDelete = (e) => {
    deleteAlert(e.id);
  };

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get("http://127.0.0.1:8000/api/team/");
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
        axios.delete(`http://127.0.0.1:8000/api/team/${id}`).then((res) => {
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
      <DataShowTable handleDelete={handleDelete} item={teamData} />
    </div>
  );
};

export default ManageTeam;
