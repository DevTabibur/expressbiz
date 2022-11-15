import { useEffect, useState } from "react";

const usePayment = () => {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/payment`;
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
