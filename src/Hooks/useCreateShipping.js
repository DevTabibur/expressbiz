import React, { useContext, useEffect, useState } from "react";
import { StepperContexts } from "../Pages/Multi Form/contexts/StepperContexts";

const useCreateShipping = () => {
  const { userData, setUserData } = useContext(StepperContexts);
  const [createShipping, setCreateShipping] = useState(userData);

  useEffect(() => {
    const url = `http://localhost:5000/create-shipping`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createShipping),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("use create shipping hook posted data", data);
      });
  }, [userData , createShipping]);
  return [userData, createShipping];
};

export default useCreateShipping;
