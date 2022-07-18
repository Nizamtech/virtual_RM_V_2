import React from "react";

const Dashboard = () => {
  console.log(process.env.REACT_APP_HOST_URL);
  return (
    <div className=" h-screen p-3 my-3">
      <h1>This is Dashboard</h1>
    </div>
  );
};

export default Dashboard;
