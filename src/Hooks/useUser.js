import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useUser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const url = `http://localhost:5000/users`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          // signOut(auth);
          navigate("/login");
          localStorage.removeItem("accessToken");
        }
        return res.json();
      })
      .then((data) => {
        // console.log("inside use users hooks", data);
        if (data.code === 401 || data.code === 403) {
          localStorage.removeItem("user_id");
          navigate("/login");
          window.location.reload();
        }
        setUsers(data);
      });
  }, [users, navigate]);
  return [users];
};

export default useUser;
