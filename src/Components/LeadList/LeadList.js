import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeadListFilter from "./LeadListFilter";
import LeadListTable from "./LeadListTable";

import axios from "axios";
import Swal from "sweetalert2";

const LeadList = () => {
  const [leadList, setLeadList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}/api/lead/`)
      .then((response) => response.json())
      .then((data) => setLeadList(data));
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
            const rest = leadList.filter((item) => item.id !== id);
            setLeadList(rest);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className=" h-screen mx-3 p-3">
      <div className=" float-right bg-green-400 px-4 py-2 rounded-lg text-white font-bold">
        {" "}
        <Link to="/newlead">New Lead</Link>
      </div>
      <LeadListFilter />
      <LeadListTable deleteAlert={deleteAlert} data={leadList} />
    </div>
  );
};

export default LeadList;
