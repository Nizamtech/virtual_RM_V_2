import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import {
  faCog,
  faUser,
  faUnlock,
  faBars,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="">
      <div className="flex flex-wrap ">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#F1F5F9] rounded-full ">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-sm text-[#1B399D] font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
                  href="#pablo"
                >
                  Hello, Jhon
                </a>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    className="text-lg leading-lg text-black opacity-75"
                  />
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                      href="#pablo"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      <FontAwesomeIcon
                        icon={faCog}
                        className="text-lg leading-lg  "
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {menuOpen && (
        <div className="bg-[#1E40AF] w-60 float-right relative top-[-15px] text-white p-3 rounded-md mr-2">
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
          <div className=" flex items-center">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="text-lg leading-lg w-4 h-4  "
            />
            <h1 className=" my-2  font-medium text-sm  mx-4">Logout</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
