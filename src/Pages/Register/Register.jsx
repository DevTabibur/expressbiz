import "./Register.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
  faFax,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import useActiveUser from "../../Hooks/useActiveUser";
import useToken from "../../Hooks/useToken";
import Loader from "../../Shared/Loader/Loader";
const Register = () => {
  const [activeUser, activeUserData, isLoading] = useActiveUser();
  const [registerLoading, setRegisterLoading] = useState(false);
  const isActive = localStorage.getItem("accessToken");

  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    // if user is register once, then he'll not register again before logout.
    if (isActive) {
      Swal.fire({
        title: "Authentication is failed",
        text: "Please logout for again registration",
        icon: "error",
      });
    } else {
      const url = `http://localhost:5000/api/v1/user/register`;
      setRegisterLoading(true);
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data inside register", data);
          if (data.code === 400) {
            Swal.fire({
              title: data.status,
              text: data?.err?.message,
              icon: "error",
            });
          } else if (data.code === 200) {
            // console.log("everything is perfect", data);
            const token = data?.data?.token;
            localStorage.setItem("accessToken", JSON.stringify(token));
            Swal.fire({
              title: "success",
              text: data?.message,
              icon: "success",
            });
            navigate("/");
            window.location.reload();
          }
          setRegisterLoading(false);
        });
    }
  };

  // for loading
  if (registerLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="container m-auto">
        <div className="grid md:grid-cols-2 shadow-2xl gap-0 ">
          {/* first col */}
          <div className="login-left-col">
            <div className="login-info p-12 text-center">
              <FontAwesomeIcon className="icon" icon={faLockOpen} />

              <h2 className="text-white  font-bold text-xl my-6">
                WELCOME TO YOUR ACCOUNT
              </h2>
              <p className="text-neutral  mb-4">
                Please crete your own credentials. Thank
              </p>
              <Link
                to="/login"
                className="hover:underline font-md font-sans font-bold text-primary hover:text-white"
              >
                If you have account already, please login in
              </Link>
            </div>
          </div>

          <div className="login-right-col p-12">
            <h1 className="text-accent text-mono font-bold text-3xl mb-4">
              Registration
            </h1>
            {/* login form */}

            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-4">
                {/* name */}
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="input input-bordered "
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
                {/* email */}
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered "
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* password */}
                <div className="form-control">
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered "
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* confirm password */}
                <div className="form-control">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered "
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
              </div>
              {/* <label className="label">
                <span className="label-text">{signInError}</span>
              </label> */}

              <input
                className="btn btn-accent text-white mt-4"
                type="submit"
                value="REGISTRATION"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
