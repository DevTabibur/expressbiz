import React, { useEffect, useState } from "react";

const useSingleService = (id) => {
  const [singleService, setSingleService] = useState();

  useEffect(() => {
    const url = `https://expressbiz-server-re-deploy.onrender.com/api/v1/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log("inside single service hooks", data);
        setSingleService(data?.data);
      });
  }, [id]);
  return [singleService];
};

export default useSingleService;
