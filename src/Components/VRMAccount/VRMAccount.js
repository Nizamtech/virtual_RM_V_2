import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VRMChart from "../../Shared/Chart/VRMChart";
import Account from "../Account/Account";
import CardCommissionTable from "../CardCommission/CardCommissionTable";
import CardCommissionList from "../CardCommissionList/CardCommissionList";
import Commission from "../Commission/Commission";
import LeadList from "../LeadList/LeadList";
import LeadListTable from "../LeadList/LeadListTable";
import PaymentStatusTable from "../PaymentStatus/PaymentStatusTable";
import VRMCommissionList from "../VRMCommission/VRMCommissionList";
import VRMLeads from "../VRMLeads/VRMLeads";
import Tabs from "./Tabs";
import VRMTab from "./VRMTab";
import VRMTabCom from "./VRMTabCom";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";

const VRMAccount = () => {
  const { vrmID } = useParams();
  const [vrmUser, setVRMUser] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/api/agent/register/${vrmID}/`
      );
      setVRMUser(response?.data);
    };
    loadData();
  }, [vrmID]);

  const items = [
    {
      id: "Dahboard",
      label: "Dahboard",
      content: "Dashboard",
    },
    {
      id: "Account",
      label: "Account",
      content: <Account data={vrmUser} />,
    },
    {
      id: "Leads",
      label: "Leads",
      content: <VRMLeads vrmID={vrmID} data={vrmUser} />,
    },
    {
      id: "Commission",
      label: "Commission",
      content: <Commission data={vrmUser} />,
    },
    {
      id: "Transaction",
      label: "Transaction",
      content: <PaymentStatusTable />,
    },
  ];

  return (
    <div className=" h-screen m-2 p-3 overflow-y-scroll ">
      {/* vrm Account header  */}
      <div className="myShadow8">
        <div className=" grid grid-cols-1 md:grid-cols-3  py-3 rounded-lg p-2  ">
          <div className="flex justify-center items-center p-2">
            <div className=" h-24 w-24 flex relative mx-2">
              <img
                className=" rounded-full "
                //   height="150px"
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className=" mx-2">
              <h1 className=" text-lg text-slate-900">
                {vrmUser?.first_name + " " + vrmUser?.last_name}
              </h1>
              <h1 className=" text-sm text-gray-600">
                {/* {vrmUser?.location} */}
                Dhaka, Banani
              </h1>
              <div className=" flex  items-center ">
                <h1>{vrmUser?.status_name}</h1>
                {/* <h1 className="ml-2 w-2 h-2 rounded-full bg-green-500 border-green-500 ring-1 ring-green-300 "></h1> */}
                {/* <h1 className="ml-2 w-2 h-2 rounded-full bg-red-500 border-red-500 ring-1 ring-red-300"></h1> */}
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-medium text-center lg:text-left lg:mt-3 ">
              Contact Details
            </h1>
            <div>
              <div className="sm:whitespace-normal flex items-center my-1">
                <BiPhone size={18} />
                <h1 className=" text-sm text-gray-600 w-4 h-4 mr-2 mx-2">
                  {vrmUser?.phone}
                </h1>
              </div>
              <div className="truncate sm:whitespace-normal flex items-center my-1">
                <AiOutlineMail size={18} />
                <h1 className=" text-sm text-gray-600 w-4 h-4 mr-2 mx-2 ">
                  {vrmUser?.email}
                </h1>
              </div>
              <div className="truncate sm:whitespace-normal flex items-center my-1">
                <FaRegHandshake size={18} />
                <h1 className=" text-sm text-gray-600  h-4 mr-2 mx-2">
                  Joined: {vrmUser?.created_at}
                </h1>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <h1 className=" text-center"> Sales Graph</h1>
            <div>
              <VRMChart />
            </div>
          </div>
        </div>

        {/* VRM Tab  */}
        <div className=" mx-2 p-2 border-t overflow-x-scroll">
          {/* <VRMTab /> */}
          <Tabs items={items} />
        </div>
      </div>
    </div>
  );
};

export default VRMAccount;
