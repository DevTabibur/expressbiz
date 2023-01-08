import { icon } from "@fortawesome/fontawesome-svg-core";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useActiveUser from "../../../Hooks/useActiveUser";
const AddServices = () => {
  const [activeUser, isLoading] = useActiveUser();
  const email = activeUser?.email;
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
    const postData = new FormData();
    postData.append("email", email);
    postData.append("title", data.title);
    postData.append("image", data.image[0]);
    postData.append("price", data.price);
    postData.append("description", data.description);

    const img = data.image[0];
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
          // everything is perfect
          // console.log("everything is perfect");
          const url = `http://localhost:5000/api/v1/products`;
          await fetch(url, {
            method: "POST",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: postData,
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log("data posted", data);
              if (data.code === 400 || data.code === 401 || data.code === 403) {
                Swal.fire({
                  title: data?.message,
                  text: data?.error,
                  icon: "error",
                });
              } else {
                Swal.fire({
                  title: data?.status,
                  text: data?.message,
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
      <h1 className="text-accent text-5xl font-bold ">Add Services</h1>
      <div className="container mx-auto px-4 py-12">
        <form onSubmit={handleSubmit(onSubmit)}>
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

            {/* price */}
            <div className="form-group">
              <input
                type="number"
                placeholder="Price*"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:accent focus:outline-none"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is Required",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.price?.type === "required" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors.price.message}
                  </span>
                )}
              </label>
            </div>

            {/* serviceImage */}
            <div className="form-group">
              <input
                type="file"
                placeholder=".jpg, .png and .jpeg formats are allowed"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:accent focus:outline-none"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors.image.message}
                  </span>
                )}
              </label>
              <label className="label my-1 py-0 text-warning">
                Only JPG, PNG and JPEG with max 2MB files are validate
              </label>
            </div>
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
