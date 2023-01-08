import { useEffect, useState } from "react";

const usePayment = () => {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    const url = `https://expressbiz-server-re-deploy.onrender.com/payment`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("payment inside hooks", data);
        setPayments(data);
      });
  }, [payments]);
  return [payments];
};

export default usePayment;
