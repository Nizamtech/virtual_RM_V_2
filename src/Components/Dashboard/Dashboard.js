import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardType } from "../../Redux/Slices/userSlice";
import Modal from "../../Shared/Modal/Modal";

const Dashboard = () => {
  const daataa = useSelector((state) => state.reducer.card_type);
  const dispatch = useDispatch();

  console.log(daataa);

  const [showModal, setShowModal] = useState(false);
  // const handleClose = () => setShowModal(false);
  // const handleShow = () => setShowModal(true);
  const handleAttendance = () => {
    setShowModal(true);
  };

  const data = useSelector((state) => state.reducer);

  return (
    <div className=" h-screen p-3 my-3">
      <h1>This is Dashboard</h1>
      <button
        onClick={() => {
          dispatch(cardType(5));
        }}
      >
        Showwww
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Dashboard;
