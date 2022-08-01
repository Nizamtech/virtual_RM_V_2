import React from "react";
import { useDispatch } from "react-redux";
import { FaBars } from "react-icons/fa";
import Menu from "../../Shared/Menu/Menu";
import { handleSideBar } from "../../Redux/Slices/userSlice";

// import Menu from "../Menu";

const Layout = ({ children }) => {
  const user = sessionStorage.getItem("aamartaka");
  const dispatch = useDispatch();
  return (
    <div className=" bg-[#F1F5F9] rounded-t-[40px]  ">
      {user && (
        <>
          <button
            className="flex justify-end lg:hidden right-4 top-4 focus:outline-none p-5"
            onClick={() => dispatch(handleSideBar())}
          >
            <FaBars className="text-2xl  text-gray-700" />
          </button>

          <div className="hidden lg:block">
            <Menu />
          </div>

          <hr className=" border-dotted border-slate-500" />
        </>
      )}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
