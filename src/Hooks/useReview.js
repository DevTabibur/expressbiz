import React, { useEffect, useState } from "react";

const useReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/review`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data get review", data);
        setReviews(data);
      });
  }, [reviews]);
  return [reviews];
};

export default useReview;
