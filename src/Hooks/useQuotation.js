import { useEffect, useState } from "react";

const useQuotation = () => {
  const [quotations, setQuotations] = useState([]);
  useEffect(() => {
    const url = `https://expressbiz-server-re-deploy.onrender.com/quote`;
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
