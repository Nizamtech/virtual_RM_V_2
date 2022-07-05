import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  faUsers,
  faUserPlus,
  faPeopleRoof,
  faUserGear,
  faCreditCard,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const loccation = useLocation();
  return (
    <aside className="w-54  " aria-label="Sidebar ">
      <div className="overflow-y-auto overflow-x-hidden py-4  bg-[#1E40AF] rounded dark:bg-gray-800">
        <img
          src="https://assets.aamartaka.com/static/img/logo.188499c90b19.png"
          alt=""
          className=" h-10 mx-auto"
        />

        <hr className=" border-dotted my-2" />

        <ul className="space-y-2  ">
          <li>
            <NavLink
              to="/test1"
              className={`${
                loccation.pathname.includes("test1") && "activeLink"
              } use"h-10  flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
            >
              <svg
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-2 text-white">Dashboard </span>
            </NavLink>
          </li>
          <li className=" text-white flex   ml-2">
            <svg
              className=" flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <details className=" text-white mx-2 mt-2 w-full ">
              <summary className=" mb-1">User Section</summary>
              <div className=" bg-[#1B399D] mx-2 rounded-lg w-full">
                <NavLink
                  to="/createteam"
                  className={`${
                    loccation.pathname.includes("createteam") && "activeLink"
                  } use" h-10 ml-2  flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
                >
                  {/* <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> */}
                  <FontAwesomeIcon icon={faUsers} />

                  <span className="ml-3">Create Team</span>
                </NavLink>
                <NavLink
                  to="/manageteam"
                  className={`${
                    loccation.pathname.includes("manageteam") && "activeLink"
                  } use" h-10 ml-2  flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
                >
                  <FontAwesomeIcon icon={faPeopleRoof} />
                  {/* <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> */}
                  <span className="ml-3">Manage Team</span>
                </NavLink>
                <NavLink
                  to="/createuser"
                  className={`${
                    loccation.pathname.includes("createuser") && "activeLink"
                  } use" h-10 ml-2  flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
                >
                  <FontAwesomeIcon icon={faUserPlus} />
                  {/* <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> */}
                  <span className="ml-3">Create User</span>
                </NavLink>
                <NavLink
                  to="/manageuser"
                  className={`${
                    loccation.pathname.includes("manageuser") && "activeLink"
                  } use" h-10 ml-2  flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
                >
                  <FontAwesomeIcon icon={faUserGear} />
                  {/* <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> */}
                  <span className="ml-2">Manage User</span>
                </NavLink>
              </div>
            </details>
          </li>
          <li className=" text-white flex  ml-2 ">
            <svg
              className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <details className=" text-white  mx-2 mt-2 w-full">
              <summary className=" mb-1">Benefits</summary>
              <div className=" bg-[#1B399D] mx-2 rounded-lg w-full ">
                <NavLink
                  to="/cardcommission"
                  className={`${
                    loccation.pathname.includes("cardcommission") &&
                    "activeLink"
                  } use" h-10 ml-2  flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
                >
                  <FontAwesomeIcon icon={faCreditCard} />

                  <span className="ml-2 text-xs">Card Commission</span>
                </NavLink>
                <NavLink
                  to="/cclist"
                  className={`${
                    loccation.pathname.includes("cclist") && "activeLink"
                  } use" h-10 ml-2  flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
                >
                  <FontAwesomeIcon icon={faCreditCard} />

                  <span className="ml-2 text-xs">Card Commission List</span>
                </NavLink>
                <NavLink
                  to="/loancommission"
                  className={`${
                    loccation.pathname.includes("loanommission") && "activeLink"
                  } use" h-10 ml-2  flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
                >
                  <FontAwesomeIcon icon={faHandHoldingDollar} />

                  <span className="ml-2 text-xs">Loan Commission</span>
                </NavLink>
                <NavLink
                  to="/lclist"
                  className={`${
                    loccation.pathname.includes("lclist") && "activeLink"
                  } use" h-10 ml-2  flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
                >
                  <FontAwesomeIcon icon={faHandHoldingDollar} />

                  <span className="ml-2 text-xs">Loan Commission List</span>
                </NavLink>
              </div>
            </details>
          </li>
          <li>
            <NavLink
              to="/vrmlist"
              className={`${
                loccation.pathname.includes("vrmlist") && "activeLink"
              } use"  flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
            >
              <svg
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3 text-white">VRM List</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/leadlist"
              className={`${
                loccation.pathname.includes("leadlist") && "activeLink"
              } use"  flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap text-white">
                Lead List
              </span>
            </NavLink>
          </li>
          <li className=" ml-2">
            <NavLink to="/" className=" flex">
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap text-white">
                Submitted Lead
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/paymentstatus"
              className={`${
                loccation.pathname.includes("paymentstatus") && "activeLink"
              } use"  flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap text-white">
                Payment Status
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feature"
              className={`${
                loccation.pathname.includes("feature") && "activeLink"
              } use"  flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap text-white">
                Feature
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inbox"
              className={`${
                loccation.pathname.includes("inbox") && "activeLink"
              } use"  flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap text-white">
                Inbox
              </span>
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap text-white">
                VRM Activity
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap text-red-400">
                Log Out
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
