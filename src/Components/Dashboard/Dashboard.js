import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../Shared/Modal/Modal";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  // const handleClose = () => setShowModal(false);
  // const handleShow = () => setShowModal(true);
  const handleAttendance = () => {
    setShowModal(true);
  };

  const data = useSelector((state) => state.reducer);
  console.log("from Dashboard", data);
  return (
    <div className=" h-screen p-3 my-3">
      <h1>This is Dashboard</h1>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Showwww
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Dashboard;
