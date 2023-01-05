import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useActiveUser from "../Hooks/useActiveUser";

const RequireUser = () => {
  const [activeUser, isLoading] = useActiveUser();

  const location = useLocation();
  // console.log("RequireUser", activeUser?.email);

  if (!activeUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireUser;
