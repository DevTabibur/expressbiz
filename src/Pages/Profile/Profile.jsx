import useActiveUser from "../../Hooks/useActiveUser";
import Loader from "../../Shared/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { act } from "@testing-library/react";

const Profile = () => {
  const navigate = useNavigate();
  const [activeUser, isLoading] = useActiveUser();
  const { name, email, imageURL, bio, contactNumber, _id } = activeUser;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const oldPassword = data.oldPassword;
    const newPassword = data.newPassword;
    const confirmPassword = data.confirmPassword;

    if (newPassword !== confirmPassword) {
      Swal.fire({
        title: "Password not matched!",
        icon: "warning",
      });
    } else {
      const url = `http://localhost:5000/api/v1/user/register/change-password/${_id}`;
      await fetch(url, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
          email: email,
          oldPassword: oldPassword,
          confirmPassword: confirmPassword,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("password posted", data);
          if (data.code === 403 || data.code === 401 || data.code === 400) {
            Swal.fire({
              title: data?.message,
              text: data?.error,
              icon: "error",
            });
          } else if (data.code === 200) {
            Swal.fire({
              title: data?.status,
              text: data?.message,
              icon: "success",
            });
            reset();
          }
        });
    }
  };

  return (
    <div className="mb-40">
      <div className="grid md:grid-cols-2 gap-6 ">
        <div>
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-md">
              {imageURL ? (
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg w-full h-60 mx-auto"
                    src={`http://localhost:5000/${imageURL}`}
                    alt=""
                  />
                </a>
              ) : (
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg w-60 h-60 mx-auto"
                    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                    alt=""
                  />
                </a>
              )}

              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2 uppercase">
                  {name && activeUser?.name}
                </h5>
                <p className="text-gray-700 text-base mb-4">
                  Email <strong> : </strong> {email}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  Contact : {contactNumber && contactNumber}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  Bio: {bio && bio}
                </p>
                <button
                  type="button"
                  onClick={() => navigate("/dashboard/edit-profile")}
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-md p-4">
              <h1 className="text-3xl text-accent font-semibold">
                Change Password
              </h1>

              <div className="grid md:grid-cols-1 p-6 gap-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/*old password */}
                  <div className="form-group mb-6">
                    <input
                      type="password"
                      placeholder="Old Password"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:accent focus:outline-none"
                      {...register("oldPassword", {
                        required: {
                          value: true,
                          message: "Old Password is Required",
                        },
                        minLength: {
                          value: 6,
                          message: "Must be 6 characters or longer",
                        },
                      })}
                    />
                    <label className="label my-1 py-0">
                      {errors.oldPassword?.type === "required" && (
                        <span className="label-text-alt text-red-500 ">
                          {errors.oldPassword.message}
                        </span>
                      )}
                      {errors.oldPassword?.type === "minLength" && (
                        <span className="label-text-alt text-red-500 ">
                          {errors.oldPassword.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {/*new password */}
                  <div className="form-group mb-6">
                    <input
                      type="password"
                      placeholder="New Password"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:accent focus:outline-none"
                      {...register("newPassword", {
                        required: {
                          value: true,
                          message: "New Password is Required",
                        },
                        minLength: {
                          value: 6,
                          message: "Must be 6 characters or longer",
                        },
                      })}
                    />
                    <label className="label my-1 py-0">
                      {errors.newPassword?.type === "required" && (
                        <span className="label-text-alt text-red-500 ">
                          {errors.newPassword.message}
                        </span>
                      )}
                      {errors.newPassword?.type === "minLength" && (
                        <span className="label-text-alt text-red-500 ">
                          {errors.newPassword.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {/*confirm password */}
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:accent focus:outline-none"
                      {...register("confirmPassword", {
                        required: {
                          value: true,
                          message: "Confirm Password is Required",
                        },
                        minLength: {
                          value: 6,
                          message: "Must be 6 characters or longer",
                        },
                      })}
                    />
                    <label className="label my-1 py-0">
                      {errors.confirmPassword?.type === "required" && (
                        <span className="label-text-alt text-red-500 ">
                          {errors.confirmPassword.message}
                        </span>
                      )}
                      {errors.confirmPassword?.type === "minLength" && (
                        <span className="label-text-alt text-red-500 ">
                          {errors.confirmPassword.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <input
                    className=" mt-6 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    type="submit"
                    value="Change Password"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
