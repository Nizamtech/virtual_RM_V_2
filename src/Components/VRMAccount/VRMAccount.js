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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  icon-name="mail"
                  data-lucide="mail"
                  class="lucide lucide-mail w-4 h-4 mr-2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <h1 className=" text-sm text-gray-600 w-4 h-4 mr-2">
                  {vrmUser?.phone}
                </h1>
              </div>
              <div className="truncate sm:whitespace-normal flex items-center my-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  icon-name="instagram"
                  data-lucide="instagram"
                  class="lucide lucide-instagram w-4 h-4 mr-2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <h1 className=" text-sm text-gray-600 w-4 h-4 mr-2">
                  {vrmUser?.email}
                </h1>
              </div>
              <div className="truncate sm:whitespace-normal flex items-center my-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  icon-name="twitter"
                  data-lucide="twitter"
                  class="lucide lucide-twitter w-4 h-4 mr-2"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
                <h1 className=" text-sm text-gray-600  h-4 mr-2">
                  Joind: {vrmUser?.created_at}
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
