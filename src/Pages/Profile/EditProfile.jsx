import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useActiveUser from "../../Hooks/useActiveUser";

const EditProfile = () => {
  const [userData, userActiveData, isLoading] = useActiveUser();
  const { name, email, bio, number, profileImage, path } = userActiveData;
  // console.log("userActiveData", userActiveData);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const getIdLocally = localStorage.getItem("user_id");
  const id = JSON.parse(getIdLocally);
  // console.log("id", id);

  const onSubmit = async (data, e) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("profileImage", data.profileImage[0]);
    formData.append("name", data.name);
    formData.append("number", data.number);
    formData.append("bio", data.bio);

    const img = data.profileImage[0];
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

          const url = `http://localhost:5000/register/${id}`;
          fetch(url, {
            method: "PUT",
            body: formData,
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log("data posted", data);
              if (data.modifiedCount) {
                Swal.fire({
                  title: "Profile Updated",
                  icon: "success",
                });
                reset();
                window.location.reload();
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
      <div className="md:flex flex-row gap-4">
        <div className="basis-1/3">
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-wd-sm">
              {profileImage ? (
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg w-96"
                    src={`http://localhost:5000/${path}`}
                    alt="profile_image"
                  />
                </a>
              ) : (
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                    alt=""
                  />
                </a>
              )}

              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  Name : {name}
                </h5>
                <p className="text-gray-700 text-base mb-2">Email : {email}</p>
                {number ? (
                  <p className="text-gray-700 text-base mb-2">
                    Phone : {number}
                  </p>
                ) : (
                  <p className="text-gray-700 text-base mb-2">
                    Update your phone number
                  </p>
                )}

                {bio ? (
                  <p className="text-gray-700 text-base mb-2">{bio}</p>
                ) : (
                  <p className="text-gray-700 text-base mb-2">
                    Update your Bio
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="basis-2/3 bg-white rounded shadow-md p-8">
          <h1 className="text-accent font-semibold text-3xl mb-6">
            Edit your Profile
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <div className="grid md:grid-cols-2 gap-4">
              {/* email */}
              <div className="form-group">
                <input
                  type="email"
                  className="cursor-not-allowed form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:accent focus:outline-none"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  defaultValue={userActiveData?.email}
                  readOnly
                  {...register("email")}
                />
              </div>

              {/* name */}
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:accent focus:outline-none"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9 ]*$/,
                      message: "Name should be unique",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

              {/*contact number */}
              <div className="form-group mb-6">
                <input
                  type="text"
                  placeholder="Contact number"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:accent focus:outline-none"
                  {...register("number", {
                    required: {
                      value: true,
                      message: "Mobile number is Required",
                    },
                    pattern: {
                      value:
                        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                      message: "Provide a valid Number",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.number?.type === "required" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.number.message}
                    </span>
                  )}
                  {errors.number?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.number.message}
                    </span>
                  )}
                </label>
              </div>

              {/*Photo */}
              <div className="form-group mb-6">
                <input
                  type="file"
                  name="avatar"
                  placeholder="Choose Profile"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:accent focus:outline-none"
                  {...register("profileImage", {
                    required: {
                      value: true,
                      message: "Profile Image is Required",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.profileImage?.type === "required" && (
                    <span className="label-text-alt text-red-500 ">
                      {errors.profileImage.message}
                    </span>
                  )}
                </label>
                <label className="label my-1 py-0 text-warning">
                  Only JPG, PNG and JPEG with max 2MB files are validate
                </label>
              </div>
            </div>

            {/*Bio */}
            <div className="form-group">
              <textarea
                type="text"
                placeholder="Write Bio"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:accent focus:outline-none"
                {...register("bio", {
                  required: {
                    value: true,
                    message: "Bio is Required",
                  },
                })}
              />
              <label className="label my-1 py-0">
                {errors.bio?.type === "required" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors.bio.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className=" mt-6 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
