import React from "react";
import Menu from "../../Shared/Menu/Menu";
// import Menu from "../Menu";

const Layout = ({ children }) => {
  return (
    <div className=" bg-[#F1F5F9] rounded-t-[40px] ">
     <Menu/>
     <hr className=" border-dotted border-slate-500"/>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
