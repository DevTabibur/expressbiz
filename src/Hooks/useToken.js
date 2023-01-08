import { useEffect, useState } from "react";
import useActiveUser from "./useActiveUser";

const useToken = () => {
  const [activeUser, activeUserData, isLoading] = useActiveUser();

  const [token, setToken] = useState("");

  useEffect(() => {
    const email = activeUserData?.email;

    const currentUser = { email: email };

    if (email) {
      const url = `https://expressbiz-server-re-deploy.onrender.com/users/${email}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data inside token", data);
          const accessToken = data.accessToken;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [activeUser, activeUserData]);
  return [token];
};

export default useToken;
