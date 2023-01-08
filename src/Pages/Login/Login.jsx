import "./Login.css";
import LoginImage from "../../Assets/images/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useToken from "../../Hooks/useToken";
import useActiveUser from "../../Hooks/useActiveUser";
import Loader from "../../Shared/Loader/Loader";

const Login = () => {
  const [loginLoading, setLoginLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const getToken = localStorage.getItem("accessToken");
  const url = `http://localhost:5000/api/v1/user/login`;

  const onSubmit = async (data, e) => {
    if (getToken) {
      Swal.fire({
        title: "Failed",
        text: "Please Logout for again login",
        icon: "error",
      });
    } else {
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data", data);
          if (data.code === 200) {
            Swal.fire({
              title: data?.status,
              text: data?.message,
              icon: "success",
            });
            const token = data?.data?.token;
            localStorage.setItem("accessToken", JSON.stringify(token));
            navigate("/");
            window.location.reload();
          } else if (
            data.code === 401 ||
            data.code === 403 ||
            data.code === 400
          ) {
            Swal.fire({
              title: data?.status,
              text: data?.error,
              icon: "error",
            });
          }
        });
    }
  };

  // for loader
  if (loginLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="container m-auto">
        <div className="grid md:grid-cols-2 gap-0 ">
          {/* first col */}
          <div className="login-left-col">
            <div className="login-info p-12 text-center">
              <FontAwesomeIcon className="icon" icon={faLockOpen} />

              <h2 className="text-white  font-bold text-xl my-6">
                WELCOME TO YOUR ACCOUNT
              </h2>
              <p className="text-neutral  mb-4">
                abc abc abc abc abc abc abc abca abc abc abc abc
              </p>
              <Link
                to="/register"
                className="hover:underline font-md font-sans font-bold text-primary hover:text-white"
              >
                Create a New Account
              </Link>
            </div>
          </div>

          <div className="login-right-col p-12">
            <h1 className="text-accent text-mono font-bold text-3xl mb-4">
              Login To Your Account
            </h1>
            {/* login form */}

            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <label
                  className="label mb-4"
                  onClick={async () => {
                    // await sendPasswordResetEmail(email);
                  }}
                >
                  <p className="label-text-alt link link-hover font-semibold  text-primary hover:text-accent">
                    <Link to="/forgot-password">Forgot password?</Link>
                  </p>
                </label>
              </div>
              {/* {showError} */}

              <input
                className="btn btn-accent text-white"
                type="submit"
                value="LOGIN"
              ></input>
            </form>
            <div className=" py-4">
              <button
                className="btn btn-sm btn-warning"
                onClick={() => navigate(-1)}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
