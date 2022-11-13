import { useEffect, useState } from "react";

const useQuotation = () => {
  const [quotations, setQuotations] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/quote`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("quotation history data", data);
        setQuotations(data);
      });
  }, [quotations]);
  return [quotations];
};

export default useQuotation;
