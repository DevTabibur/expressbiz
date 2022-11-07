import React, { useState } from "react";
import Loader from "../Shared/Loader/Loader";

const useAdmin = user => {
    console.log('useAdmin', user)
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  if (adminLoading) {
    return <Loader />;
  }
  return [admin, adminLoading];
};

export default useAdmin;
