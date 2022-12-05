import { icon } from "@fortawesome/fontawesome-svg-core";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useActiveUser from "../../../Hooks/useActiveUser";
const AddServices = () => {
  const [activeUser, activeUserData] = useActiveUser();
  const email = activeUserData?.email;
  // console.log("email", email);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    error,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("title", data.title);
    formData.append("serviceImage", data.serviceImage[0]);
    formData.append("description", data.description);

    const img = data.serviceImage[0];
    const validExt = ["png", "jpg", "jpeg", "PNG", "JPG", "JPEG"];

    if (img !== "") {
      // checking image extension
      // imageName.jpeg
      const pos_of_dot = img.name.lastIndexOf(".") + 1;
      const img_ext = img.name.substring(pos_of_dot);
      const result = validExt.includes(img_ext);

      if (result === false) {
        Swal.fire({
          title: "Only jpg, png and jpeg files are allowed",
          icon: "warning",
        });
        return false;
      }
      // checking image size
      else {
        if (parseFloat(img.size / (1024 * 1024)) >= 5) {
          // perform operation
          Swal.fire({
            title: "File Size must be smaller than 5MB",
            icon: "warning",
          });
          return false;
        } else {
          console.log("everything is perfect");

          // everything is perfect
          const url = `http://localhost:5000/services`;
          await fetch(url, {
            method: "POST",

            body: formData,
          })
            .then((res) => {
              // console.log("res", res);
              return res.json();
            })
            .then((data) => {
              // console.log("data posted", data);
              if (data.insertedId) {
                Swal.fire({
                  title: "Service Added",
                  icon: "success",
                });
                reset();
              }
            });
        }
      }
    } else {
      alert("No Image is selected");
      return false;
    }
  };

  return (
    <>
      {" "}
      <h1 className="text-accent text-5xl font-bold ">
        Add Services
      </h1>
      <div className="container mx-auto px-4 py-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          action="http://localhost:5000/"
          method="post"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {/* email */}
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="cursor-not-allowed form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:accent focus:outline-none"
                defaultValue={email}
                readOnly
                {...register("email")}
              />
            </div>

            {/* title */}
            <div className="form-group">
              <input
                type="text"
                placeholder="Service Title"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:accent focus:outline-none"
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
                  <span className="label-text-alt text-red-500 ">
                    {errors.title.message}
                  </span>
                )}
                {errors.title?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors.title.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          {/* serviceImage */}
          <div className="form-group">
            <input
              type="file"
              placeholder=".jpg, .png and .jpeg formats are allowed"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:accent focus:outline-none"
              {...register("serviceImage", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
            <label className="label my-1 py-0">
              {errors.serviceImage?.type === "required" && (
                <span className="label-text-alt text-red-500 ">
                  {errors.serviceImage.message}
                </span>
              )}
            </label>
            <label className="label my-1 py-0 text-warning">
              Only JPG, PNG and JPEG with max 2MB files are validate
            </label>
          </div>

          {/* description */}
          <div className="form-group">
            <textarea
              type="text"
              placeholder="Write Here"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:accent focus:outline-none"
              {...register("description", {
                required: {
                  value: true,
                  message: "description is Required",
                },
              })}
            />
            <label className="label my-1 py-0">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500 ">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-group mt-6">
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
