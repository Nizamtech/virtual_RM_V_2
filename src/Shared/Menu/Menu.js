import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import {
  faCog,
  faUser,
  faUnlock,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleLogout = () => {
    console.log("hello");
    sessionStorage.removeItem("aamartaka");
  };

  return (
    <div className=" ">
      <div className="flex flex-wrap ">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#F1F5F9] rounded-full ">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full  flex justify-between  px-4 static ">
                <a
                  className="text-sm text-[#1B399D] font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
                  href="#pablo"
                >
                  Hello, Jhon
                </a>

                <ul className="flex justify-between items-center">
                  <li className="nav-item">
                    <div
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      <FontAwesomeIcon
                        icon={faCog}
                        className="text-lg leading-lg  "
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {menuOpen && (
        <div className="bg-[#1E40AF] w-60 float-right absolute top-20 right-10 text-white p-3 rounded-md mr-2 z-50">
          <h1 className=" font-bold text-sm">Mr.Jhon</h1>
          <h1>Frontend Developer</h1>
          <hr className=" border-dotted my-3" />
          <div className=" flex items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="text-lg leading-lg w-4 h-4  "
            />
            <h1 className=" my-2  font-medium text-sm  mx-4">Profile</h1>
          </div>
          <div className=" flex items-center">
            <FontAwesomeIcon
              icon={faUnlock}
              className="text-lg leading-lg w-4 h-4  "
            />
            <h1 className=" my-2  font-medium text-sm  mx-4">Reset Password</h1>
          </div>

          <hr className=" border-dotted my-2" />
          <button onClick={handleLogout} className=" flex items-center">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="text-lg leading-lg w-4 h-4  "
            />
            <h1 className=" my-2  font-medium text-sm  mx-4">Logout</h1>
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
