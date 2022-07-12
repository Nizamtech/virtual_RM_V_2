import axios from "axios";
import React, { useEffect, useState } from "react";
import VrmListTable from "../VRMList/VrmListTable";
import VRMStatusTable from "../VRMStatusTable/VRMStatusTable";
import Select from "react-select";
const Account = ({ data }) => {
  console.log("from account", data);
  const [userAccount, setUserAccount] = useState([]);
  const [division, setDivision] = useState([]);
  const [divName, setDivName] = useState("");
  const [status, setStatus] = useState("");
  const [remarks, setRemarks] = useState("");
  const [error, setError] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [password, setPasssword] = useState({
    password1: "",
    password2: "",
  });
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        `https://admin.aamartaka.com/api/v1/division/`
      );
      setDivision(response?.data?.results);
    };
    loadData();
  }, []);
  let divisionData = division?.map(function (item) {
    return { value: item?.name, label: item?.name };
  });
  const statusData = [
    { label: "Active", value: "Active" },
    { label: "Hold", value: "Hold" },
    { label: "suspense", value: "suspense" },
  ];
  const handlechange = (e) => {
    const { name, value } = e.target;
    const newData = { ...personalDetails };
    newData[name] = value;
    setPersonalDetails(newData);
  };
  const handlePassword = (e) => {
    const { name, value } = e.target;
    const newData = { ...password };
    newData[name] = value;
    setPasssword(newData);
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setRemarks(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      status: status?.value,
      remarks: remarks,
    };
    // const response = await axios.post("https://reqres.in/api/articles", data);
    // console.log(data);
  };

  const handlePersonalSubmit = (e) => {
    e.preventDefault();
    const res = {
      name: personalDetails?.name || data?.username,
      email: personalDetails?.email || data?.email,
      phone: personalDetails?.phone || data?.phone,

      division: divName?.value,
    };
    console.log(res);
  };

  const submitPassword = (e) => {
    e.preventDefault();
    console.log(password);
    if (password?.password1 === password?.password2) {
      setError(false);
      console.log("done");
    } else setError(true);
  };

  return (
    <div className=" h-screen">
      <div className="  grid grid-cols-1 lg:grid-cols-2 gap-4 mx-2 px-2 py-4  ">
        {/* personal Details  start */}
        <form onSubmit={handlePersonalSubmit}>
          <div className="myShadow8 bg-gray-100 pb-4 rounded-lg pt-2">
            <div className=" flex flex-col mx-auto lg:mx-4 my-3">
              <label className=" ml-2 text-lg mb-2 text-">Name</label>
              <input
                defaultValue={data?.username}
                onBlur={handlechange}
                className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
                type="text"
                name="name"
                placeholder=" Name"
              />
            </div>
            <div className=" flex flex-col mx-auto lg:mx-4 my-3">
              <label className=" ml-2 text-lg mb-2 text-">Email</label>
              <input
                defaultValue={data?.email}
                onBlur={handlechange}
                className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
                type="email"
                name="email"
                placeholder=" Name"
              />
            </div>
            <div className=" flex flex-col mx-auto lg:mx-4 my-3">
              <label className=" ml-2 text-lg mb-2 text-">Mobile</label>
              <input
                defaultValue={data?.phone}
                onBlur={handlechange}
                className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
                type="text"
                maxLength={11}
                name="phone"
                placeholder=" Name"
              />
            </div>
            <div className=" flex flex-col mx-auto lg:mx-4 my-3">
              {/* <label className=" ml-2 text-lg mb-2 text-">location</label> */}
              <fieldset>
                {/* <legend className=" ml-2 text-lg mb-2 ">location</legend> */}
                <div className=" grid grid-cols-2 bg-white">
                  <div className=" flex  justify-start items-center border-r rounded">
                    <label className="   h-full w-full bg-gray-300  flex justify-center items-center text-gray-600   ">
                      District
                    </label>
                    <Select
                      styles={{
                        control: (base) => ({
                          ...base,
                          border: "0 !important",
                          // This line disable the blue border
                          boxShadow: "0 !important",
                          "&:hover": {
                            border: "0 !important",
                          },
                        }),
                      }}
                      required
                      name="division"
                      onChange={setDivName}
                      options={divisionData}
                      className="w-full mx-1  border-none outline-none rounded  mb-1 leading-tight focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div className=" flex justify-start items-center border-l rounded">
                    <label className=" h-full w-full bg-gray-300  flex justify-center items-center text-gray-600  ">
                      Sub District
                    </label>

                    <input
                      className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300   "
                      type="text"
                      name="name"
                      placeholder=" Name"
                    />
                    {/* <input list="browsers"  />

                    <datalist id="browsers">
                      <option value="Internet Explorer" />
                      <option value="Firefox" />
                      <option value="Chrome" />
                      <option value="Opera" />
                      <option value="Safari" />
                    </datalist> */}
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
        </form>
        {/* personal Details  End */}

        {/* user Details  start here  */}
        <div className="myShadow8 bg-gray-100 pb-4 rounded-lg">
          <form onSubmit={handleSubmit}>
            <fieldset>
              {/* <legend className=" ml-2 text-lg mb-2 ">location</legend> */}
              <div className=" grid grid-cols-2 gap-4 mt-3 mr-2 ">
                <div className=" flex  justify-start items-center  rounded">
                  <label className="ml-2 text-slate-900 h-full w-full  text-lg flex justify-center items-center   ">
                    Set Status
                  </label>
                  <Select
                    styles={{
                      control: (base) => ({
                        ...base,
                        border: "0 !important",
                        height: "46px",
                        boxShadow: "0 !important",
                        "&:hover": {
                          border: "0 !important",
                        },
                      }),
                    }}
                    defaultValue={"in process"}
                    required
                    name="status"
                    onChange={setStatus}
                    options={statusData}
                    className=" w-full"
                  />
                </div>
                <div className=" flex justify-center items-center bg-white w-full">
                  <textarea
                    className="  focus:outline-gray-300 pt-3 flex justify-center items-center h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 w-full   "
                    type="text"
                    name="remarks"
                    onBlur={handleBlur}
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
          </form>
          <hr className=" border-dotted border my-3" />
          {/* status list  */}
          <VRMStatusTable />
        </div>
        {/* user Details  start end */}

        {/* reset Password  */}

        <form onSubmit={submitPassword}>
          <div className="myShadow8 bg-gray-100 pb-4 rounded-lg pt-5">
            <div className=" flex flex-col mx-auto lg:mx-4 my-3">
              <label className=" ml-2 text-lg mb-2 text-">New Password</label>
              <input
                className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
                type="password"
                name="password1"
                placeholder=" Enter  New Password"
                onBlur={handlePassword}
              />
            </div>
            <div className=" flex flex-col mx-auto lg:mx-4 my-3">
              <label className=" ml-2 text-lg mb-2 text-">
                Confirm Password
              </label>
              <input
                className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
                type="password"
                name="password2"
                placeholder=" Confirm New Password"
                onBlur={handlePassword}
              />
              {error && (
                <h1 className=" ml-4 text-red-600">Password does not match</h1>
              )}
            </div>
            <div className=" flex flex-col mx-auto lg:mx-4 my-3">
              <label className=" ml-2 text-lg mb-2 text-">OTTP</label>
              <input
                className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
                type="password"
                name="password1"
                placeholder=" Enter 4 Digit Code"
                onBlur={handlePassword}
              />
            </div>
            <input
              className=" w-20 bg-green-400 py-1 px-4 rounded text-white text-lg mt-4  mr-2 relative right-[-87%]"
              type="submit"
              value="SAVE"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
