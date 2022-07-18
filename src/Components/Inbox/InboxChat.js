import React from "react";
import profile from "../../assets/akane.svg";
import profile1 from "../../assets/eliot.svg";
import profile2 from "../../assets/emily.svg";
import profile3 from "../../assets/joe.svg";
import profile4 from "../../assets/akane.svg";

import { FiSend } from "react-icons/fi";
import ChatTabs from "./ChatTabs/ChatTabs";

const data = [
  { id: 1, avatar: profile2, name: "Nizam" },
  { id: 2, avatar: profile1, name: "Amana " },
  { id: 3, avatar: profile3, name: "Kamal" },
  { id: 4, avatar: profile4, name: "Jamal" },
];
const InboxChat = () => {
  return (
    <div className=" grid grid-cols-12 ">
      <div className=" col-span-3">
        <div className="  py-2 px-3  border-gray-300 border-r">
          {/* Header  */}
          <div className=" flex  items-center">
            <ChatTabs data={data} />
            {/* <img
              className=" rounded-full h-12 w-12 mx-2"
              src={profile}
              alt=""
            />
            <h1 className="text-[18px] ">Nizam</h1> */}
          </div>
        </div>

        {/* <div className=" mt-3">
          {data &&
            data?.map((item) => (
              <div className="p-2 flex  items-center my-4 hover:bg-[#d8e6f1]">
                <img
                  className=" rounded-full h-12 w-12 mx-2"
                  src={item?.avatar}
                  alt=""
                />
                <h1 className="text-[18px] ">{item?.name}</h1>
              </div>
            ))}
        </div> */}
      </div>

      {/* chat box  */}
      <div className=" col-span-9 h-screen border-l border-gray-400">
        {/* Header  */}
        <div className="bg-[#F6FBFF] py-2 px-3 border-b border-gray-300 ">
          <div className=" flex  items-center">
            <img
              className=" rounded-full h-12 w-12 mx-2"
              src={profile}
              alt=""
            />
            <h1 className="text-[18px] ">Nizam</h1>
          </div>
        </div>

        {/* Chat list  */}
        <div className=" px-2 h-4/5">
          <h1>Chat list </h1>
        </div>
        {/* Chat Input Box  */}
        <div className=" flex items-center relative top-0  px-2 border-y border-gray-300 py-2">
          <input
            className=" w-full rounded-full outline-0 focus:outline-none focus: border-0 h-12 px-4  "
            type="text"
            placeholder="Type Here"
          />
          <FiSend className="mx-2 text-gray-400" size={30} />
        </div>
      </div>
    </div>
  );
};

export default InboxChat;
