import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Loader from "../Shared/Loader/Loader";

const useActiveUser = () => {
  const [activeUser, setActiveUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getToken = localStorage.getItem("accessToken");
  const getTokenDecoded = JSON.parse(getToken);

  useEffect(() => {
    if (getToken !== null && getToken !== undefined) {
      const decoded = jwt_decode(getTokenDecoded);
      const id = decoded.id;

      if (id !== undefined) {
        const url = `http://localhost:5000/api/v1/user/register/${id}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            // console.log("inside active user hooks", data);
            setActiveUser(data?.data);
          });
      }
    }
  }, [getToken, getTokenDecoded, activeUser]);

  if (isLoading) {
    return <Loader />;
  }

  return [activeUser, isLoading];
};

export default useActiveUser;
