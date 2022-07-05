import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatureTable from "./FeatureTable";
import Swal from "sweetalert2";

const Feature = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/feature/");
      setData(response?.data?.results);
    };
    loadData();
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
            const rest = data.filter((item) => item.id !== id);
            setData(rest);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div className=" h-screen m-3 p-3">
      <div className=" absolute  right-14 bg-green-400 p-2 rounded-lg px-4 text-white font-bold">
        <Link to="/addfeature">Add New Feature </Link>
      </div>

      <FeatureTable data={data} deleteAlert={deleteAlert} />
    </div>
  );
};

export default Feature;
