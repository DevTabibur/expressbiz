import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import Loader from "../Shared/Loader/Loader";

const RequireAdmin = () => {
  const location = useLocation();
  const user = true;
  const [admin] = useAdmin(user);

//   if (adminLoading) {
//     return <Loader />;
//   }

  if (!user || !admin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RequireAdmin;
