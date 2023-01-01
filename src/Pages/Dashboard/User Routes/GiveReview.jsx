import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useActiveUser from "../../../Hooks/useActiveUser";

const GiveReview = () => {
  const [activeUser, isLoading] = useActiveUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    const url = `http://localhost:5000/api/v1/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        email: activeUser?.email,
        reviewer: activeUser?.name,
        review: data.review,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data posted", data);
        if (data.code === 400) {
          Swal.fire({
            title: data.status,
            text: data?.message,
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Review submitted",
            icon: "success",
          });
          reset();
        }
      });
  };
  return (
    <>
      <h1 className="text-accent text-5xl font-bold ">Give Us Your Review</h1>
      <div className="container mx-auto px-4 py-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4">
            {/* email */}
            <div className="form-control">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered cursor-not-allowed"
                defaultValue={activeUser?.email}
                readOnly
                {...register("email")}
              />
            </div>

            {/* your name */}
            <div className="form-control">
              <input
                type="text"
                placeholder="your Name"
                className="input input-bordered cursor-not-allowed"
                {...register("reviewer")}
                defaultValue={activeUser?.name}
                readOnly
              />
              <label className="label my-1 py-0">
                {errors.reviewer?.type === "required" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors.reviewer.message}
                  </span>
                )}
                {errors.reviewer?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors.reviewer.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          {/* description */}
          <div className="form-control">
            <textarea
              type="text"
              placeholder="Write Review"
              className="textarea textarea-bordered "
              {...register("review", {
                required: {
                  value: true,
                  message: "description is Required",
                },
              })}
            />
            <label className="label my-1 py-0">
              {errors.review?.type === "required" && (
                <span className="label-text-alt text-red-500 ">
                  {errors.review.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-accent text-white"
              type="submit"
              value="SUBMIT REVIEW"
            ></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default GiveReview;
