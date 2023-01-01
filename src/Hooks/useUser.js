import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useUser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const url = `http://localhost:5000/api/v1/user/register`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("inside use users hooks", data);
        setUsers(data?.data);
      });
  }, [users, navigate]);
  return [users];
};

export default useUser;
