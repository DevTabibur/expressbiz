import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useReview from "../../../Hooks/useReview";
import ShoClientReviews from "./ShowClientReviews";

const ClientReviews = () => {
  const navigate = useNavigate();
  const [reviews] = useReview();

  const deleteReview = (id) => {
    const url = `http://localhost:5000/api/v1/reviews/${id}`;
    const confirmation = window.confirm("Are you want to delete?");
    if (confirmation) {
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("review deleted", data);
          if (data.code === 400) {
            Swal.fire({
              title: data?.status,
              text: data?.message,
              icon: "error",
            });
          } else {
            Swal.fire({
              title: data?.status,
              text: data?.message,
              icon: "success",
            });
          }
        });
    }
  };

  return (
    <div className="mb-40">
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
                Here is the testimonials sections. Admin can see our valuable
                clients feedback. Thank You
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
    </div>
  );
};

export default ClientReviews;
