import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const usePaymentCollection = () => {
  const [paymentCollection, setPaymentCollection] = useState([]);
  useEffect(() => {
    const url = `https://expressbiz-server-re-deploy.onrender.com/api/v1/payment`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("paymentCollection", data);
        if (data.code === 400) {
          return Swal.fire({
            title: data?.status,
            text: data?.error,
            icon: "error",
          });
        }
        else{
          setPaymentCollection(data?.data);
        }
        
      });
  }, [paymentCollection]);
  return [paymentCollection];
};

export default usePaymentCollection;
