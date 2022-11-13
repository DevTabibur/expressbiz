import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState([]);

  console.log('get token data', user)
  useEffect(() => {
    const email = user?.email;
    // console.log('email', email)

    const currentUser = { email: email };

    // if (email) {
    //   const url = `http://localhost:5000/users/${email}`;
    //   fetch(url, {
    //     method: "PUT",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(currentUser),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log("data inside token", data);
    //       const accessToken = data.accessToken;
    //       localStorage.setItem("accessToken", accessToken);
    //       setToken(accessToken);
    //     });
    // }
  }, [user]);
  return [token];
};

export default useToken;
