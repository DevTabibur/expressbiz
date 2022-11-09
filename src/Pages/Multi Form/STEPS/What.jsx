import { useContext } from "react";
import { useForm } from "react-hook-form";
import { StepperContexts } from "../contexts/StepperContexts";
import PackageImage from "../../../Assets/images/package.jpg";

const What = () => {
  const { userData, setUserData } = useContext(StepperContexts);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    const what = data;
    setUserData({ ...userData, what });
    reset();
  };

  console.log("What data", userData);

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-accent font-semibold text-2xl font-sans text-left">
          what kind of packaging are you using?
        </h1>
        <p className="text-neutral-focus font-mono mb-8">
          *indicates require file
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* form div */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-4">
                {/* weight */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold font-sans text-accent">
                      Weight (kg)*
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Weight (kg)*"
                    className="input input-bordered font-mono"
                    {...register("weight", {
                      required: {
                        value: true,
                        message: "Weight (kg) is required",
                      },
                      pattern: {
                        value: /^-?\d*\.?\d*$/,
                        message: "Please Weight is need in kg",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.weight?.type === "required" && (
                      <span className="label-text-alt text-red-500 font-mono">
                        {errors.weight.message}
                      </span>
                    )}
                    {errors.weight?.type === "pattern" && (
                      <span className="label-text-alt text-red-500 font-mono">
                        {errors.weight.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* height */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold font-sans text-accent">
                      Height (inch)
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Height (inch)*"
                    className="input input-bordered font-mono"
                    {...register("height")}
                  />
                </div>

                {/* width */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold font-sans text-accent">
                      Width (inch)
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Width (inch)*"
                    className="input input-bordered font-mono"
                    {...register("width")}
                  />
                </div>

                {/* Length */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold font-sans text-accent">
                      Length (inch)
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Length (inch)*"
                    className="input input-bordered font-mono"
                    {...register("length")}
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

          <div>
            <figure>
              <img
                className="w-96 mx-auto"
                src={PackageImage}
                alt="package_image"
              />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default What;
