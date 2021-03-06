import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LeadListFilter from "./LeadListFilter";
import LeadListTable from "./LeadListTable";

import axios from "axios";
import Swal from "sweetalert2";
import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";

const LeadList = ({ vrmID, data }) => {
  // const { id } = useParams();
  const [leadList, setLeadList] = useState([]);
  const [vrmAgent, setVrmAgent] = useState("");
  const [status, setStatus] = useState("");
  const [productType, setProductType] = useState("");
  const [bank, setBank] = useState("");
  const [andSign, setandSign] = useState([]);
  const [mobile, setMobile] = useState("");
  const [value, onChange] = useState([new Date(), new Date()]);

  const date = {
    startDate: value[0].toLocaleDateString(),
    endDate: value[1].toLocaleDateString(),
  };

  console.log(date);

  const [api, setApi] = useState("api/lead");
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}/${api}`)
      .then((response) => response.json())
      .then((data) => setLeadList(data));
  }, [api]);

  const handleFilter = () => {
    const data = {
      statusValue: status?.value,
      bankValue: bank?.value,
      productTypeValue: productType?.value,
      mobile_no: mobile,
      user: vrmAgent?.value,
    };

    const URL = `api/lead/?${status && `status=${data?.statusValue}`}&${
      productType && `interested_product=${data?.productTypeValue}`
    }&${bank && `interested_bank=${data?.bankValue}`}&${
      vrmAgent && `user=${data?.user}`
    }&${date && `created_at=${date}`}
    &${mobile && `mobile_no=${mobile}`}`;

    setApi(URL);
  };

  const handleReset = () => {
    setVrmAgent("");
    setStatus("");
    setProductType("");
    setBank("");
    setMobile("");
    setApi("api/lead");
  };
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

  console.log(leadList);
  return (
    <div className=" h-screen mx-3 p-3">
      <HeadingTitle title="Lead List" />
      <div className=" float-right bg-green-400 px-4 py-2 rounded-lg text-white font-bold">
        {" "}
        <Link to={vrmID ? `/newlead/${data?.id}` : `/newlead`}>New Lead</Link>
      </div>
      <LeadListFilter
        handleReset={handleReset}
        setandSign={setandSign}
        setVrmAgent={setVrmAgent}
        setStatus={setStatus}
        setProductType={setProductType}
        setBank={setBank}
        handleFilter={handleFilter}
        setMobile={setMobile}
        vrmID={vrmID}
        value={value}
        onChange={onChange}
      />
      <LeadListTable deleteAlert={deleteAlert} data={leadList} />
    </div>
  );
};

export default LeadList;
