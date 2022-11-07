import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const useActiveUser = () => {
  const [activeUser, setActiveUser] = useState([]);

  const getIdLocally = localStorage.getItem("user_id");
  const id = JSON.parse(getIdLocally);
  console.log("id", id);

  useEffect(() => {
    if (id) {
      const url = `http://localhost:5000/register/${id}`;
      fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("use active user inside hook data", data);
          if (data.user === true || data.user === "true") {
            setActiveUser(true);
          } else {
            setActiveUser(false);
          }
        });
    } else {
      console.log("Please register or login");
      setActiveUser(false);
    }
  }, [id]);
  return [activeUser];
};

export default useActiveUser;
