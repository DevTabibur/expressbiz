import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useActiveUser from "../Hooks/useActiveUser";
import useAdmin from "../Hooks/useAdmin";
import Loader from "../Shared/Loader/Loader";

const RequireAdmin = () => {
  const location = useLocation();
  const [activeUser, activeUserData] = useActiveUser();
  // const [admin, adminLoading] = useAdmin(activeUserData);

  // if (adminLoading) {
  //   return <Loader />;
  // }
  const admin = true

  if (!activeUser || !admin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RequireAdmin;
