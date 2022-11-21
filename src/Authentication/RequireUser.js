import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useActiveUser from "../Hooks/useActiveUser";

const RequireUser = () => {
  const [user] = useActiveUser();

  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireUser;
