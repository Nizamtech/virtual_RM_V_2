import React from "react";
import { Navigate, useLocation } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
const PrivateRoute = ({ children }) => {
  const user = sessionStorage.getItem("aamartaka");
  const token = JSON.parse(user);

  const location = useLocation();
  // useEffect(() => {
  //   if (token) {
  //     setIsLoading(false);
  //   }
  // }, [token]);
  // if (isLoading) {
  //   return <h1>Loading</h1>;
  // }

  if (token?.token) {
    return children;
  } else return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
