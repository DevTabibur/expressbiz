import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { StepperContexts } from "../Pages/Multi Form/contexts/StepperContexts";

const useCreateShipping = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://expressbiz-server-re-deploy.onrender.com/api/v1/shipping`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("use create shipping hook posted data", data);
        if (data.code === 400 || data.code === 401 || data.code === 403) {
          return Swal.fire({
            title: data?.status,
            text: data?.error,
            icon: "error",
          });
        } else {
          setOrders(data?.data);
        }
      });
  }, [orders]);
  return [orders];
};

export default useCreateShipping;
