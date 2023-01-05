import React, { useEffect, useState } from "react";

const usePaymentCollection = () => {
  const [paymentCollection, setPaymentCollection] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/api/v1/payment`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("paymentCollection", data);
        setPaymentCollection(data?.data);
      });
  }, [paymentCollection]);
  return [paymentCollection]
};

export default usePaymentCollection;
