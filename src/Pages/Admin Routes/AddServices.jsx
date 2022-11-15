import { icon } from "@fortawesome/fontawesome-svg-core";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useActiveUser from "../../Hooks/useActiveUser";
const AddServices = () => {
  const [activeUse, activeUserData] = useActiveUser();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    const url = `http://localhost:5000/services`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data posted", data);
        if (data.code === 401 || data.code === 403) {
          localStorage.removeItem("user_id");
          navigate("/login");
        }
        if (data.acknowledged) {
          Swal.fire({
            title: "Service added",
            icon: "success",
          });
          reset();
        }
      });
  };

  return (
    <>
      {" "}
      <h1 className="text-accent text-5xl font-bold font-serif">
        Add Services
      </h1>
      <div className="container mx-auto px-4 py-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4">
            {/* title */}
            <div className="form-control">
              <input
                type="text"
                placeholder="Service Title"
                className="input input-bordered font-mono"
                {...register("title", {
                  required: {
                    value: true,
                    message: "Service Title is Required",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9 ]*$/,
                    message: "Service Title should be unique",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.title?.type === "required" && (
                  <span className="label-text-alt text-red-500 font-mono">
                    {errors.title.message}
                  </span>
                )}
                {errors.title?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 font-mono">
                    {errors.title.message}
                  </span>
                )}
              </label>
            </div>

            {/* email */}
            <div className="form-control">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered font-mono"
                defaultValue={activeUserData?.email}
                readOnly
                {...register("email")}
              />
            </div>
          </div>

          {/* imageLink */}
          <div className="form-control">
            <input
              type="text"
              placeholder="Image Link (l ike: imgbb)"
              className="input input-bordered font-mono"
              {...register("image", {
                required: {
                  value: true,
                  message: "image Link is Required",
                },
                pattern: {
                  value:
                    /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
                  message: "Image Link start with https",
                },
              })}
            />
            <label className="label my-1 py-0">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500 font-mono">
                  {errors.image.message}
                </span>
              )}
              {errors.image?.type === "pattern" && (
                <span className="label-text-alt text-red-500 font-mono">
                  {errors.image.message}
                </span>
              )}
            </label>
          </div>
          {/* description */}
          <div className="form-control">
            <textarea
              type="text"
              placeholder="Write Here"
              className="textarea textarea-bordered font-mono"
              {...register("description", {
                required: {
                  value: true,
                  message: "description is Required",
                },
              })}
            />
            <label className="label my-1 py-0">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500 font-mono">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-accent text-white"
              type="submit"
              value="ADD SERVICE"
            ></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddServices;
