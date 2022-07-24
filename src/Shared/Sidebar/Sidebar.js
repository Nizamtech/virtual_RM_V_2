import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Collapsible from "react-collapsible";

import {
  faUsers,
  faUserPlus,
  faPeopleRoof,
  faUserGear,
  faCreditCard,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import { BsChevronDown } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { TbLayoutDashboard } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { FaMoneyCheck } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { BsFileCheckFill } from "react-icons/bs";
import { MdForwardToInbox } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";
import { AiOutlineLogout } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
const Sidebar = () => {
  const loccation = useLocation();

  let activeStyle = {
    color: "black",
  };

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
              to="/"
              className={`${
                loccation.pathname.includes("test2") && "activeLink"
              } use"h-10  flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
            >
              <TbLayoutDashboard className=" text-white" size={30} />
              <span className="ml-2 text-white">Dashboard </span>
            </NavLink>
          </li>

          <div className="ml-2 flex w-full justify-center">
            <FaUsers className=" text-white" size={30} />
            <Collapsible
              className="mx-3 px-1 w-full text-base font-normal "
              trigger={["User Section", <BsChevronDown />]}
            >
              <li className="  bg-[#1B399D] text-white w-full my-2 pb-2">
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
              </li>
            </Collapsible>
          </div>

          <div className="ml-2 flex w-full justify-center ">
            <GiReceiveMoney className=" text-white" size={30} />
            <Collapsible
              className="mx-3 px-1 w-full text-base font-normal "
              trigger={["Benefits", <BsChevronDown />]}
            >
              <li className="  bg-[#1B399D] text-white w-full my-2 pb-2 ">
                <NavLink
                  to="/cardcommission"
                  className={`${
                    loccation.pathname.includes("cardcommission") &&
                    "activeLink"
                  } use" h-10 ml-2  flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
                >
                  <FontAwesomeIcon icon={faCreditCard} />

                  <span className="ml-2 text-base">Card Commission</span>
                </NavLink>
                <NavLink
                  to="/cclist"
                  className={`${
                    loccation.pathname.includes("cclist") && "activeLink"
                  } use" h-10 ml-2  flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
                >
                  <FontAwesomeIcon icon={faCreditCard} />

                  <span className="ml-2 text-base">Card Commission List</span>
                </NavLink>
                <NavLink
                  to="/loancommission"
                  className={`${
                    loccation.pathname.includes("loancommission") &&
                    "activeLink"
                  } use" h-10 ml-2  flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
                >
                  <FontAwesomeIcon icon={faHandHoldingDollar} />

                  <span className="ml-2 text-base">Loan Commission</span>
                </NavLink>
                <NavLink
                  to="/lclist"
                  className={`${
                    loccation.pathname.includes("lclist") && "activeLink"
                  } use" h-10 ml-2  flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
                >
                  <FontAwesomeIcon icon={faHandHoldingDollar} />

                  <span className="ml-2 text-base">Loan Commission List</span>
                </NavLink>
              </li>
            </Collapsible>
          </div>
          <li>
            <NavLink
              to="/vrmlist"
              className={`${
                loccation.pathname.includes("vrmlist") && "activeLink"
              } use"  flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
            >
              <BsListCheck size={30} />
              <span className="ml-3   text-base font-normal active:text-black ">
                VRM List
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/leadlist"
              className={`${
                loccation.pathname.includes("leadlist") && "activeLink  "
              } " flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#294AB3] "`}
            >
              <SiGoogleads className=" " size={30} />
              <span className="flex-1 ml-3 text-base font-normal ">
                Lead List
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/submittedelead"
              className={`${
                loccation.pathname.includes("submittedelead") && "activeLink"
              } use"  flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
            >
              <BsFileCheckFill size={30} />
              <span className="flex-1 ml-3 text-base font-normal ">
                Submitted Lead
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/paymentrequest"
              className={`${
                loccation.pathname.includes("paymentrequest") && "activeLink"
              } use"  flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
            >
              <FaMoneyCheck size={30} />
              <span className="flex-1 ml-3 text-base font-normal ">
                Payment Request
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/paymentstatus"
              className={`${
                loccation.pathname.includes("paymentstatus") && "activeLink"
              } use"  flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
            >
              <FaMoneyCheck size={30} />
              <span className="flex-1 ml-3 text-base font-normal ">
                Payment Details
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feature"
              className={`${
                loccation.pathname.includes("feature") && "activeLink"
              } use"  flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
            >
              <MdOutlineFeaturedPlayList size={30} />
              <span className="flex-1 ml-3 text-base font-normal">Feature</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inbox"
              className={`${
                loccation.pathname.includes("inbox") && "activeLink"
              } use"  flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
            >
              <MdForwardToInbox size={30} />
              <span className="flex-1 ml-3 text-base font-normal ">Inbox</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"
            >
              <TbActivityHeartbeat size={30} />
              <span className="flex-1 ml-3 text-base font-normal ">
                VRM Activity
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/specialcommissionList"
              className={`${
                loccation.pathname.includes("specialcommissionList") &&
                "activeLink"
              } use"  flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"`}
            >
              <GiPayMoney size={30} />
              <span className="flex-1 ml-3 text-base font-normal ">
                Special Commission
              </span>
            </NavLink>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-[#294AB3]  dark:hover:bg-gray-700"
            >
              <AiOutlineLogout className=" text-red-500" size={30} />
              <span className="flex-1 ml-3 text-base font-normal text-red-400">
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
