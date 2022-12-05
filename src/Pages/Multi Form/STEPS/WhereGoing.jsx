import { useContext } from "react";
import { useForm } from "react-hook-form";
import { StepperContexts } from "../contexts/StepperContexts";
const WhereGoing = ({ handleClick, currentStep, steps }) => {
  const { userData, setUserData } = useContext(StepperContexts);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    const shippingGoing = {
      email: data?.email,
      companyName: data?.companyName,
      number: data?.number,
      country: data?.country,
      destinationAddress: data?.destinationAddress,
      postalCode: data?.postalCode,
    };
     setUserData({ ...userData, shippingGoing });
    handleClick("next");
  };

  // console.log("Where going data", userData);
  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-accent font-semibold text-2xl font-sans text-left">
          Hello. Where is your Shipping going?
        </h1>
        <p className="text-neutral-focus  mb-8">
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
                className="input  input-bordered input-success "
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
                className="input  input-bordered input-success "
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
                  <span className="label-text-alt text-red-500 ">
                    {errors.companyName.message}
                  </span>
                )}
                {errors.companyName?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 ">
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
                className="input  input-bordered input-success "
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

            {/* country */}

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold font-sans text-accent">
                  Country*
                </span>
              </label>
              <input
                type="text"
                placeholder="Country*"
                defaultValue="Bangladesh"
                className="input  input-bordered input-success "
                {...register("country")}
              />
            </div>

            {/* address */}

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold font-sans text-accent">
                  Destination Address ( to: )*
                </span>
              </label>
              <input
                type="text"
                placeholder="Office Address*"
                className="input  input-bordered input-success "
                {...register("destinationAddress", {
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
                {errors.destinationAddress?.type === "required" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors.destinationAddress.message}
                  </span>
                )}
                {errors.destinationAddress?.type === "pattern" && (
                  <span className="label-text-alt text-red-500 ">
                    {errors.destinationAddress.message}
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
                className="input  input-bordered input-success "
                {...register("postalCode")}
              />
            </div>
          </div>

          <input
            className="btn btn-accent text-white mt-4 px-12 py-4"
            type="submit"
            value={currentStep === steps.length - 1 ? "Confirm" : "Next"}
          ></input>
        </form>
        <button
          onClick={() => handleClick()}
          className={`bg-white text-slate-400 uppercase py-2 px-8 rounded mr-6 font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
            currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default WhereGoing;
