import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const useActiveUser = () => {
  const [activeUser, setActiveUser] = useState([]);
  const [activeUserData, setActiveUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getIdLocally = localStorage.getItem("user_id");
  const id = JSON.parse(getIdLocally);
  // console.log("id", id);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      const url = `http://localhost:5000/register/${id}`;
      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);

          if (data.user === true || data.user === "true") {
            setActiveUser(true);
            setActiveUserData(data);
          } else {
            setActiveUser(false);
          }
        });
    } else {
      setActiveUser(false);
    }
  }, [id, activeUser]);

  return [activeUser, activeUserData, isLoading];
};

export default useActiveUser;
