import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { isLoaDing, saveUser } from "../../../Redux/Slices/userSlice";
const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [loginData, setLoginData] = useState({
    phone: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const handleBlure = (e) => {
    const { name, value } = e.target;

    const newData = { ...loginData };
    newData[name] = value;
    setLoginData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: loginData?.phone,
      password: loginData?.password,
    };
    const login = async () => {
      dispatch(isLoaDing(true));

      const res = await axios.post(
        `${process.env.REACT_APP_HOST_URL}/accounts/login/`,
        data
      );
      if (res.status) {
        dispatch(saveUser(res?.data));
        navigate(from);
        dispatch(isLoaDing(false));
      }
    };
    login();
    e.target.reset();
  };

  // const login = (data) => {
  //   setIsLoading(true);
  //   const { email, password } = data;
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       setUser(result.user);
  //       navigate(from);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  return (
    <div className=" h-screen grid place-content-center place-items-center ">
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <div class="flex justify-center">
            <img
              src="https://assets.aamartaka.com/static/img/logo.188499c90b19.png"
              alt=""
              className=" h-20 mx-auto"
            />
          </div>
          <h3 class="text-xl font-bold text-center">Login to your account</h3>
          <form onSubmit={handleSubmit}>
            <div class="mt-4">
              <div>
                <label class="block" for="email">
                  Phone Number
                </label>
                <input
                  required
                  name="phone"
                  onBlur={handleBlure}
                  type="text"
                  placeholder="Phone Number"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                {/* <span class="text-xs tracking-wide text-red-600">
                  Phone Number
                </span> */}
              </div>
              <div class="mt-4">
                <label class="block">Password</label>
                <input
                  required
                  name="password"
                  onBlur={handleBlure}
                  type="password"
                  placeholder="Password"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="flex items-baseline justify-between">
                <button
                  type="submit"
                  class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  Login
                </button>
                <a href="#" class="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
