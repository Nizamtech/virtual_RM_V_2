import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { handleSideBar } from "../../Redux/Slices/userSlice";
import Sidebar from "../Sidebar/Sidebar";
const TogleSidebar = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.reducer.sidebar);
  console.log("sidebar", sidebar);
  //   const { toggleSidebar,  } = useGlobalContext();

  return (
    <aside
      style={{ zIndex: 60 }}
      className={`show-sidebar mt-2.5 h-screen  ${sidebar ? "flex" : "hidden"}`}
    >
      <Sidebar />
    </aside>
  );
};

export default TogleSidebar;
