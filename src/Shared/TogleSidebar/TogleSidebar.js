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
    <aside className={`show-sidebar ${sidebar ? "flex" : "hidden"}`}>
      <div className="p-4 flex justify-between items-center">
        {/* <h3 className="text-2xl">Sidebar</h3> */}
        <button onClick={() => dispatch(handleSideBar())}>
          <FaTimes />
        </button>
      </div>

      <Sidebar />
    </aside>
  );
};

export default TogleSidebar;
