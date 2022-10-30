import React, { useEffect, useState } from "react";

const useService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = `service.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("service hook inside", data);
        setServices(data);
      });
  }, [services]);
  return [services];
};

export default useService;
