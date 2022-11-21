import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { StepperContexts } from "../contexts/StepperContexts";
const WhereFrom = () => {
  const { userData, setUserData } = useContext(StepperContexts);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    // e.preventDefault();
    const shippingFrom = data;
    setUserData({ ...userData, shippingFrom });
    // reset();
  };

  console.log("WhereFrom data", userData);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-accent font-semibold text-2xl font-sans text-left">
        Hello. Where are you Shipping From?
      </h1>
      <p className="text-neutral-focus font-mono mb-8">
        *indicates require file
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-3 gap-6">
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold font-sans text-accent">
                Email*
              </span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-success font-mono"
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

          {/* company or name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold font-sans text-accent">
                Company or Name*
              </span>
            </label>
            <input
              type="text"
              placeholder="Company or Name*"
              className="input input-bordered input-success font-mono"
              {...register("companyName", {
                required: {
                  value: true,
                  message: "Company or Name is Required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9 ]*$/,
                  message: "Company or Name* should be unique",
                },
              })}
            />
            <label className="label my-1 py-0">
              {errors.companyName?.type === "required" && (
                <span className="label-text-alt text-red-500 font-mono">
                  {errors.companyName.message}
                </span>
              )}
              {errors.companyName?.type === "pattern" && (
                <span className="label-text-alt text-red-500 font-mono">
                  {errors.companyName.message}
                </span>
              )}
            </label>
          </div>

          {/*contact number */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold font-sans text-accent">
                Contact*
              </span>
            </label>
            <input
              type="text"
              placeholder="Contact number"
              className="input input-bordered input-success font-mono"
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
                <span className="label-text-alt text-red-500 font-mono">
                  {errors.number.message}
                </span>
              )}
              {errors.number?.type === "pattern" && (
                <span className="label-text-alt text-red-500 font-mono">
                  {errors.number.message}
                </span>
              )}
            </label>
          </div>

          {/* country */}

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold font-sans text-accent">
                Country
              </span>
            </label>
            <input
              type="text"
              placeholder="Country"
              defaultValue="Bangladesh"
              className="input input-bordered input-success font-mono"
              {...register("country")}
            />
          </div>

          {/* address */}

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold font-sans text-accent">
                Office Address*
              </span>
            </label>
            <input
              type="text"
              placeholder="Office Address*"
              className="input input-bordered input-success font-mono"
              {...register("address", {
                required: {
                  value: true,
                  message: "Address is Required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9 ]*$/,
                  message: "Address should be without comma, dot etc",
                },
              })}
            />
            <label className="label my-1 py-0">
              {errors.address?.type === "required" && (
                <span className="label-text-alt text-red-500 font-mono">
                  {errors.address.message}
                </span>
              )}
              {errors.address?.type === "pattern" && (
                <span className="label-text-alt text-red-500 font-mono">
                  {errors.address.message}
                </span>
              )}
            </label>
          </div>

          {/* postal code */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold font-sans text-accent">
                Postal Code / Zip Code
              </span>
            </label>
            <input
              type="text"
              placeholder="Postal Code / Zip Code"
              className="input input-bordered input-success font-mono"
              {...register("postalCode")}
            />
          </div>
        </div>
        <input
          className="btn btn-accent text-white mt-4 px-12 py-4"
          type="submit"
          value="SUBMIT"
        ></input>
      </form>
    </div>
  );
};

export default WhereFrom;
