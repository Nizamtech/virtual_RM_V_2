import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import Swal from "sweetalert2";
import LeadListFilter from "../LeadList/LeadListFilter";
import LeadListTable from "../LeadList/LeadListTable";

const VRMLeads = ({ vrmID, data }) => {
  // const { id } = useParams();
  const [leadList, setLeadList] = useState([]);
  const [vrmAgent, setVrmAgent] = useState("");
  const [status, setStatus] = useState("");
  const [productType, setProductType] = useState("");
  const [bank, setBank] = useState("");
  const [andSign, setandSign] = useState([]);
  const [mobile, setMobile] = useState("");
  const [vrmAgentData, setVrmAgentData] = useState([]);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const [api, setApi] = useState(`api/lead/?${vrmID && `user=${vrmID}`}`);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}/${api}`)
      .then((response) => response.json())
      .then((data) => setLeadList(data));
  }, [api, vrmID]);

  const handleFilter = () => {
    const data = {
      statusValue: status?.value,
      bankValue: bank?.value,
      productTypeValue: productType?.value,
      mobile_no: mobile,
      user: vrmAgent?.value,
    };
    console.log(data);

    const URL = `api/lead/?${status && `status=${data?.statusValue}`}&${
      productType && `interested_product=${data?.productTypeValue}`
    }&${bank && `interested_bank=${data?.bankValue}`}&${
      vrmAgent && `user=${data?.user}`
    }&${mobile && `mobile_no=${mobile}`}`;
    console.log(URL);
    setApi(URL);
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

  console.log("lldol", data);

  return (
    <div className=" h-screen mx-3 p-3">
      <div className=" float-right bg-green-400 px-4 py-2 rounded-lg text-white font-bold">
        {" "}
        <Link to={vrmID ? `/newlead/${data?.id}` : `/newlead`}>New Lead</Link>
      </div>
      <LeadListFilter
        setandSign={setandSign}
        setVrmAgent={setVrmAgent}
        setStatus={setStatus}
        setProductType={setProductType}
        setBank={setBank}
        setState={setState}
        handleFilter={handleFilter}
        setMobile={setMobile}
        vrmID={vrmID}
      />
      <LeadListTable deleteAlert={deleteAlert} data={leadList} />
    </div>
  );
};

export default VRMLeads;
