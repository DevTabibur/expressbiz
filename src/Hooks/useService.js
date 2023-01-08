import { useEffect, useState } from "react";

const useService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = `https://expressbiz-server-re-deploy.onrender.com/api/v1/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("service hook inside", data);
        setServices(data?.data);
      });
  }, [services]);
  return [services];
};

export default useService;
