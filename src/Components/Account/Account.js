import React from "react";
import VrmListTable from "../VRMList/VrmListTable";
import VRMStatusTable from "../VRMStatusTable/VRMStatusTable";

const Account = () => {
  return (
    <div className=" h-screen">
      <div className="  grid grid-cols-1 lg:grid-cols-2 gap-4 mx-2 px-2 py-4  ">
        {/* personal Details  start */}
        <div className="myShadow8 bg-gray-100 pb-4 rounded-lg">
          <div className=" flex flex-col mx-auto lg:mx-4 my-3">
            <label className=" ml-2 text-lg mb-2 text-">Name</label>
            <input
              className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
              type="text"
              name="name"
              placeholder=" Name"
            />
          </div>
          <div className=" flex flex-col mx-auto lg:mx-4 my-3">
            <label className=" ml-2 text-lg mb-2 text-">Email</label>
            <input
              className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
              type="email"
              name="name"
              placeholder=" Name"
            />
          </div>
          <div className=" flex flex-col mx-auto lg:mx-4 my-3">
            <label className=" ml-2 text-lg mb-2 text-">Mobile</label>
            <input
              className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
              type="text"
              maxLength={11}
              name="name"
              placeholder=" Name"
            />
          </div>
          <div className=" flex flex-col mx-auto lg:mx-4 my-3">
            {/* <label className=" ml-2 text-lg mb-2 text-">location</label> */}
            <fieldset>
              {/* <legend className=" ml-2 text-lg mb-2 ">location</legend> */}
              <div className=" grid grid-cols-2 bg-white">
                <div className=" flex  justify-start items-center border-r rounded">
                  <label className="   h-full w-full bg-gray-300 text-lg flex justify-center items-center text-gray-600   ">
                    District
                  </label>
                  <input
                    className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300   "
                    type="text"
                    name="name"
                    placeholder=" Name"
                  />
                </div>
                <div className=" flex justify-start items-center border-l rounded">
                  <label className=" h-full w-full bg-gray-300  text-lg flex justify-center items-center text-gray-600  ">
                    Sub District
                  </label>
                  <input
                    className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300   "
                    type="text"
                    name="name"
                    placeholder=" Name"
                  />
                </div>
              </div>
              <input
                className=" bg-green-400 py-1 px-4 rounded text-white text-lg mt-4 float-right"
                type="submit"
                value="SAVE"
              />
            </fieldset>
          </div>
        </div>
        {/* personal Details  End */}

        {/* user Details  start here  */}
        <div className="myShadow8 bg-gray-100 pb-4 rounded-lg">
          <fieldset>
            {/* <legend className=" ml-2 text-lg mb-2 ">location</legend> */}
            <div className=" grid grid-cols-2 gap-4 mt-3 mr-2 ">
              <div className=" flex  justify-start items-center  rounded">
                <label className="ml-2 text-slate-900 h-full w-full  text-lg flex justify-center items-center   ">
                  Set Status
                </label>
                <input
                  list="browsers"
                  className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300   "
                  type="text"
                  name="name"
                  placeholder=" Name"
                />
              </div>
              <div className=" flex justify-center items-center bg-white w-full">
                <textarea
                  className=" pt-3 flex justify-center items-center h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 w-full   "
                  type="text"
                  name="name"
                  placeholder=" Remarks"
                />
              </div>
            </div>
            <input
              className=" bg-green-400 py-1 px-4 rounded text-white text-lg mt-4 float-right mr-2"
              type="submit"
              value="SAVE"
            />
          </fieldset>
          <hr className=" border-dotted border my-3" />
          {/* status list  */}
          <VRMStatusTable />
        </div>
        {/* user Details  start end */}

        {/* reset Password  */}

        <div className="myShadow8 bg-gray-100 pb-4 rounded-lg">
          <div className=" flex flex-col mx-auto lg:mx-4 my-3">
            <label className=" ml-2 text-lg mb-2 text-">New Password</label>
            <input
              className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
              type="text"
              name="name"
              placeholder=" Enter  New Password"
            />
          </div>
          <div className=" flex flex-col mx-auto lg:mx-4 my-3">
            <label className=" ml-2 text-lg mb-2 text-">Confirm Password</label>
            <input
              className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
              type="email"
              name="name"
              placeholder=" Confirm New Password"
            />
          </div>

          <input
            className=" bg-green-400 py-1 px-4 rounded text-white text-lg mt-4 float-right mr-2"
            type="submit"
            value="SAVE"
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
