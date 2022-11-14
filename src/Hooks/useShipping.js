import React, { useContext, useEffect, useState } from "react";
import { StepperContexts } from "../Pages/Multi Form/contexts/StepperContexts";

const useCreateShipping = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/shipping`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("use create shipping hook posted data", data);
        setOrders(data);
      });
  }, [orders]);
  return [orders];
};

export default useCreateShipping;
