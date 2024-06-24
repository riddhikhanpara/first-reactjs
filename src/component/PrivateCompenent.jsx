import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateCompenent = () => {
  const userData = localStorage.getItem("user");
  return userData ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateCompenent;
