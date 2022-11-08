import "./GetQuote.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const GetQuote = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const isActive = localStorage.getItem("user_id");
  const onSubmit = async (data, e) => {
    console.log(data);
    if (!isActive) {
      // if user is not login / register.. they can't provide quotation
      Swal.fire({
        title: "Login / Registration first",
        text: "You have to create a account before quotation",
        icon: "error",
      });
    } else {
      const url = `http://localhost:5000/quote`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("quotation data send and get", data);
          if (data.acknowledged) {
            // for successfully provide quotation
            Swal.fire({
              title: "Quotation sent",
              icon: "success",
            });
            // for resetting form data
            reset()
          }
        });
    }
  };
  return (
    <>
      <div className="quote">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-4">
            {/* first col */}
            <div className="quote-left-col">
              <h1 className="text-white font-bold font-sans md:text-5xl py-4">
                GET A FREE QUOTE
              </h1>
              <p className="text-accent font-bold font-sans pb-4">
                WE ALWAYS USE BEST & FASTEST FLEETS
              </p>
              {/* get quote form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-bordered font-mono"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-white font-mono">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* email */}
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
                        <span className="label-text-alt text-white font-mono">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-white font-mono">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {/* number */}
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Mobile"
                      className="input input-bordered font-mono"
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
                        <span className="label-text-alt text-white font-mono">
                          {errors.number.message}
                        </span>
                      )}
                      {errors.number?.type === "pattern" && (
                        <span className="label-text-alt text-white font-mono">
                          {errors.number.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {/* Destination From */}
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Destination From"
                      className="input input-bordered font-mono"
                      {...register("destinationFrom", {
                        required: {
                          value: true,
                          message: "Destination From is Required",
                        },
                      })}
                    />
                    <label className="label my-1 py-0">
                      {errors.destinationFrom?.type === "required" && (
                        <span className="label-text-alt text-white font-mono">
                          {errors.destinationFrom.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {/* Destination To */}
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Destination To"
                      className="input input-bordered font-mono"
                      {...register("destinationTo", {
                        required: {
                          value: true,
                          message: "Destination To is Required",
                        },
                      })}
                    />
                    <label className="label my-1 py-0">
                      {errors.destinationTo?.type === "required" && (
                        <span className="label-text-alt text-white font-mono">
                          {errors.destinationTo.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {/* Shipping Type */}
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Shipping Type"
                      className="input input-bordered font-mono"
                      {...register("shippingType", {
                        required: {
                          value: true,
                          message: "Shipping Type To is Required",
                        },
                      })}
                    />
                    <label className="label my-1 py-0">
                      {errors.shippingType?.type === "required" && (
                        <span className="label-text-alt text-white font-mono">
                          {errors.shippingType.message}
                        </span>
                      )}
                    </label>
                  </div>

                  {/* Date & Time */}
                  <div className="form-control">
                    <input
                      type="datetime-local"
                      placeholder="Date & Time"
                      className="input input-bordered font-mono"
                      {...register("dateTime", {
                        required: {
                          value: true,
                          message: "Date & Type is Required",
                        },
                      })}
                    />
                    <label className="label my-1 py-0">
                      {errors.dateTime?.type === "required" && (
                        <span className="label-text-alt text-white font-mono">
                          {errors.dateTime.message}
                        </span>
                      )}
                    </label>
                  </div>
                </div>

                {/* message */}
                <div className="form-control">
                  <textarea
                    type="text"
                    placeholder="Write Here"
                    className="textarea textarea-bordered font-mono"
                    {...register("message", {
                      required: {
                        value: true,
                        message: "Message is Required",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.message?.type === "required" && (
                      <span className="label-text-alt text-white font-mono">
                        {errors.message.message}
                      </span>
                    )}
                  </label>
                </div>

                <input
                  className="btn btn-accent font-serif font-bold text-white"
                  value="GET A FREE QUOTE"
                  type="submit"
                />
              </form>
            </div>

            <div className="hidden"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetQuote;
