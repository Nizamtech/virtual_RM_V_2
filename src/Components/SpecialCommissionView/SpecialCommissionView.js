import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SCView from "./SCView";

const SpecialCommissionView = () => {
  const { id } = useParams();
  const [commissions, setCommission] = useState([]);
  const [agent, setAgent] = useState({});

  useEffect(() => {
    const loadData = () => {
      axios
        .get(
          `${process.env.REACT_APP_HOST_URL}/api/agent/commission/?agent=${id}`
        )
        .then((res) => {
          setCommission(res.data.results);
        });
    };
    const loadAget = () => {
      axios
        .get(`${process.env.REACT_APP_HOST_URL}/api/agent/register/${id}/`)
        .then((res) => {
          setAgent(res?.data);
        });
    };
    loadData();
    loadAget();
  }, [id]);
  const cc = commissions && commissions.filter((item) => item.product === 1);
  const loan = commissions && commissions.filter((item) => item.product === 2);

  console.log(cc, loan);
  return (
    <div className=" h-screen m- p-3">
      <div className="  p-3 rounded my-3">
        <h1 className=" text-gray-500 "> User Name</h1>
        <h1 className=" mt-1 text-sky-400 text-2xl">{agent?.username} </h1>
      </div>
      <Tabs>
        <TabList>
          <Tab>Credit Card</Tab>
          <Tab>Loan</Tab>
        </TabList>

        <TabPanel>
          <div className=" mt-3">
            {cc.length > 0 ? (
              <SCView data={cc} />
            ) : (
              <h1 className="h-[90v] grid place-content-center place-items-center mt-5 text-3xl text-gray-400">
                {" "}
                There is no Credit Card Commissin{" "}
              </h1>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" mt-3">
            {loan.length > 0 ? (
              <SCView data={loan} />
            ) : (
              <h1 className=" mt-5 text-3xl text-red-500">
                {" "}
                There is no Loan Commissin{" "}
              </h1>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SpecialCommissionView;
