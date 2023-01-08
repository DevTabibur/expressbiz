import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useUser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const url = `https://expressbiz-server-re-deploy.onrender.com/api/v1/user/register`;
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
        if (data.code === 400) {
          Swal.fire({
            title: data?.status,
            text: data?.message,
            icon: "error",
          });
          localStorage.removeItem("accessToken");
        }
        setUsers(data?.data);
      });
  }, [users, navigate]);
  return [users];
};

export default useUser;
