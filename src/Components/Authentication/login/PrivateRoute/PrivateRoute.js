import React from "react";
import { Navigate, useLocation } from "react-router";

import { useSelector, useDispatch } from "react-redux";
const PrivateRoute = ({ children }) => {
  const { token, user_data } = useSelector((state) => state.reducer.user);
  console.log(user_data);
  const location = useLocation();
  if (user_data?.isLoading) {
    return <h1>Loading</h1>;
  }

  if (user_data?.username) {
    return children;
  } else return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
