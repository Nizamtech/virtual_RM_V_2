import axios from "axios";
import React, { useEffect, useState } from "react";
import VrmListTable from "../VRMList/VrmListTable";
import VRMStatusTable from "../VRMStatusTable/VRMStatusTable";
import Select from "react-select";
import { SuccessAlert } from "../../Shared/Alert/SuccessAlert";
const Account = ({ data }) => {
  const [userAccount, setUserAccount] = useState([]);
  const [division, setDivision] = useState([]);
  const [district, setDistrict] = useState([]);
  const [districtName, setDistrictName] = useState(1);
  const [upazilas, setUpazilas] = useState([]);
  const [upazila, setUpazila] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [divName, setDivName] = useState("");
  const [status, setStatus] = useState("");
  const [remarks, setRemarks] = useState("");
  const [error, setError] = useState(false);
  const [isReset, setIsReset] = useState(true);
  const [isResetForm, setIsResetForm] = useState(false);
  const [isOTP, setIsOTP] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [password, setPasssword] = useState({
    password1: "",
    password2: "",
    otp: "",
  });
  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        `https://admin.aamartaka.com/api/v1/division/`
      );
      setDivision(response?.data?.results);
    };
    const loadDistrict = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/api/district/`
      );
      setDistricts(response?.data?.results);
    };
    const loadSubDistrict = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST_URL}/api/upazila/`
      );

      setUpazilas(response?.data?.results);
    };

    loadSubDistrict();
    loadDistrict();
    loadData();
  }, []);

  const statusData = [
    { label: "Active", value: 1 },
    { label: "Hold", value: 2 },
    { label: "Suspend", value: 3 },
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

  const handleStatus = async (id) => {
    const StatusData = {
      status: status?.value,
      remarks: remarks,
    };
    const updatUser = async () => {
      const res = await axios.patch(
        `${process.env.REACT_APP_HOST_URL}/api/agent/register/${id}/`,
        StatusData
      );
      if (res?.status === 200) {
        SuccessAlert("Successfully Updated", "success");
      } else SuccessAlert("Something Wrong", "error");
    };
    updatUser();
  };

  // update user
  const handlePersonalSubmit = (id) => {
    const userdata = {
      username: personalDetails?.name || data?.username,
      password: data?.password,
      email: personalDetails?.email || data?.email,
      phone: personalDetails?.phone || data?.phone,
      district: districtName || data?.district,
      upazila: upazila || data?.upazila,
    };

    const updatUser = async () => {
      const res = await axios.patch(
        `${process.env.REACT_APP_HOST_URL}/api/agent/register/${id}/`,
        userdata
      );
      if (res?.status === 200) {
        SuccessAlert("Successfully Updated", "success");
      } else SuccessAlert("Something Wrong", "error");
    };
    updatUser();
  };

  const submitPassword = (e) => {
    e.preventDefault();
    const sendOTP = async () => {
      const OTPdata = {
        phone_number: "01827612791",
        session_token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZV9udW1iZXIiOiIwMTgyNzYxMjc5MSIsIm5vbmNlIjowLjQyNjI2OTEzNDA5MTU3Mzc0fQ.xl2mmdJK1ORVcZIP6WMS8q9swZXed3rK0JAQZ3h7AUM",
        security_code: password?.otp,
        password1: password?.password1,
        password2: password?.password2,
      };
      const res = await axios.post(
        `${process.env.REACT_APP_HOST_URL}/api/phone/reset/`,
        OTPdata
      );
      if (res.status === 200) {
        SuccessAlert("Password reset successfully", "success");
      } else console.log(res);
    };
    if (password?.password1 === password?.password2) {
      setError(false);
      sendOTP();
    } else setError(true);
  };

  const handleDistrict = (e) => {
    setDistrictName(e.target.value);
    // const rest =
    //   districtName &&
    //   upazilas?.filter((item) => item?.district_id === districtName);
    // setUpazila(rest);
  };
  const rest =
    districtName &&
    upazilas?.filter((item) => item?.district_name === districtName);

  // reset password
  const handleResetPassword = () => {
    // setIsOTP(true);
    setIsResetForm(true);
    setIsReset(false);
  };

  // handle OTP
  const handleOTP = () => {
    setIsReset(false);
    setIsOTP(false);
  };

  return (
    <div className=" h-screen">
      <div className="  grid grid-cols-1 lg:grid-cols-2 gap-4 mx-2 px-2 py-4  ">
        {/* personal Details  start */}
        <div>
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
                  <div className=" flex  justify-start items-center border-r rounded h-12">
                    <label className="   h-full w-full bg-gray-300  flex justify-center items-center text-gray-600   ">
                      District
                    </label>

                    <select
                      onChange={(e) => setDistrictName(e.target.value)}
                      placeholder="Select"
                      type="text"
                      name="district"
                      className=" h-full  outline-none w-full mx-1  border-none  rounded  mb-1 leading-tight focus:border-0 focus:outline-none focus:bg-white py-1"
                    >
                      <option
                        defaultValue={data?.district}
                        value={data?.district}
                      >
                        {data?.district || "Select"}
                      </option>

                      {districts &&
                        districts.map((item) => (
                          <option value={item.name}>{item.name}</option>
                        ))}
                    </select>
                  </div>
                  <div className=" flex justify-start items-center border-l rounded">
                    <label className=" h-full w-full bg-gray-300  flex justify-center items-center text-gray-600  ">
                      Sub District
                    </label>

                    <select
                      onChange={(e) => {
                        setUpazila(e.target.value);
                      }}
                      placeholder="Select"
                      type="text"
                      name="subdistrict"
                      className=" h-full  outline-none w-full mx-1  border-none  rounded  mb-1 leading-tight focus:border-0 focus:outline-none focus:bg-white py-1"
                    >
                      <option
                        defaultValue={data?.upazila}
                        value={data?.upazila}
                      >
                        {data?.upazila || "Select"}
                      </option>
                      <option>Select </option>
                      {rest &&
                        rest.map((item) => (
                          <option value={item?.name}>{item.name}</option>
                        ))}
                    </select>
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
                <button
                  onClick={() => handlePersonalSubmit(data.id)}
                  className=" bg-green-400 py-1 px-4 rounded text-white text-lg mt-4 float-right"
                >
                  Update
                </button>
              </fieldset>
            </div>
          </div>
        </div>
        {/* personal Details  End */}

        {/* user Details  start here  */}
        <div className="myShadow8 bg-gray-100 pb-4 rounded-lg">
          <div>
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
              <button
                onClick={() => handleStatus(data?.id)}
                className=" bg-green-400 py-1 px-4 rounded text-white text-lg mt-4 float-right mr-2"
              >
                {" "}
                Submit
              </button>
            </fieldset>
          </div>
          <hr className=" border-dotted border my-3" />
          {/* status list  */}
          <VRMStatusTable data={data} />
        </div>
        {/* user Details  start end */}

        {/* reset Password  */}

        {/* {isReset && (
          <button
            onClick={handleResetPassword}
            className=" bg-red-400 py-1 px-4 rounded text-white text-lg mt-4  mr-2 "
            type="text"
          >
            Reset Password
          </button>
        )} */}

        {/* OPT Form  */}

        {/* reset pAssword Form   */}

        <div className="myShadow8 bg-gray-100 pb-4 rounded-lg pt-5">
          <form onSubmit={submitPassword}>
            <div>
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
                  <h1 className=" ml-4 text-red-600">
                    Password does not match
                  </h1>
                )}
              </div>

              <div className=" flex flex-col mx-auto lg:mx-4 my-3">
                <label className=" ml-2 text-lg mb-2 text-">OTP</label>
                <input
                  className=" h-12 rounded px-4 text-lg accent-sky-600 border-gray-300 border  "
                  type="text"
                  name="otp"
                  placeholder=" Enter 4 Digit Code"
                  onBlur={handlePassword}
                />
              </div>
              <div className="flex justify-end ">
                <input
                  className=" bg-green-400 py-1 px-4 rounded text-white text-lg mt-4  mr-2 "
                  type="submit"
                  value="SEND"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
