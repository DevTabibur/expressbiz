import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useReview from "../../Hooks/useReview";
import ShoClientReviews from "./ShowClientReviews";

const ClientReviews = () => {
  const navigate = useNavigate();
  const [reviews] = useReview();
  const deleteReview = (id) => {
    const url = `http://localhost:5000/review/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("review deleted", data);
        if (data.code === 401 || data.code === 403) {
          localStorage.removeItem("user_id");
          navigate("/login");
        }
        if (data.deletedCount) {
          Swal.fire({
            title: "Review Deleted",
            icon: "success",
          });
        }
      });
  };

  return (
    <>
      {/* <!-- component --> */}

      <div className="min-w-screen   flex items-center justify-center">
        <div className="w-full   px-5  text-gray-800">
          <div className="w-full  mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-5 text-accent font-sans">
                What people <br />
                are saying. {reviews.length}
              </h1>
              <h3 className="text-xl mb-5 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-info ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-info ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-info"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-info ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-info ml-1"></span>
              </div>
            </div>

            <div className="-mx-3 md:flex items-start">
              {reviews.map((review, idx) => (
                <ShoClientReviews
                  key={idx}
                  review={review}
                  deleteReview={deleteReview}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientReviews;
