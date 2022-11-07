import "./Login.css";
import LoginImage from "../../Assets/images/login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data, e) => {
    const email = data.email;
    const password = data.password;
    console.log("data", email, password);

    const url = `http://localhost:5000/login`;
    // fetch(url)
    // .then(res => res.json())
    // .then(data =>{
    //   console.log('login data', data)
    // })

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('login data', data)
        if (data.code === 401) {
          Swal.fire({
            title: "Authentication Problem",
            text: "Try user email and password correctly",
            icon: "error",
          });
        } else if (data.code === 200) {
          console.log("data", data);
          const id = data?.id;
          localStorage.setItem("user_id", JSON.stringify(id))
          const url = `http://localhost:5000/register/${id}`;
          fetch(url, {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ user: true }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("user is activated", data);
            });
        }
      });
  };

  return (
    <>
      <div className="container m-auto">
        <div className="grid md:grid-cols-2 gap-0 ">
          {/* first col */}
          <div className="login-left-col">
            <div className="login-info p-12 text-center">
              <FontAwesomeIcon className="icon" icon={faLockOpen} />

              <h2 className="text-white font-serif font-bold text-xl my-6">
                WELCOME TO YOUR ACCOUNT
              </h2>
              <p className="text-neutral font-mono mb-4">
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
                  className="input input-bordered font-mono"
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
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered font-mono"
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
                    <span className="label-text-alt text-red-500 font-mono">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500 font-mono">
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
                  <p className="label-text-alt link link-hover font-semibold font-serif text-primary hover:text-accent">
                    Forgot password?
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
