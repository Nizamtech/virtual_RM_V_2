import React from "react";
import { useSelector } from "react-redux";
import Menu from "../../Shared/Menu/Menu";
// import Menu from "../Menu";

const Layout = ({ children }) => {
  const { token, user_data } = useSelector((state) => state.reducer.user);
  return (
    <div className=" bg-[#F1F5F9] rounded-t-[40px]  ">
      {user_data?.username && <Menu />}
      <hr className=" border-dotted border-slate-500" />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
