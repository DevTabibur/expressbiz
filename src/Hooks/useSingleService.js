import React, { useEffect, useState } from "react";

const useSingleService = (id) => {
  const [singleService, setSingleService] = useState([]);

  useEffect(() => {
    const url = `http://localhost:3000/service/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("inside single service hooks", data);
        setSingleService(data);
      });
  }, [id]);
  return [singleService];
};

export default useSingleService;
