import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatureTable from "./FeatureTable";
import Swal from "sweetalert2";
import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";

const Feature = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/api/feature/`
      );
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
      <HeadingTitle title="Feature List" />
      <div className="grid place-content-end w-full ">
        <div className=" bg-green-400 p-2 rounded-lg px-4 text-white font-bold ">
          <Link to="/addfeature">Add New Feature </Link>
        </div>
      </div>

      <FeatureTable data={data} deleteAlert={deleteAlert} />
    </div>
  );
};

export default Feature;
