import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useActiveUser from "../../../Hooks/useActiveUser";
import useAdmin from "../../../Hooks/useAdmin";
import Loader from "../../../Shared/Loader/Loader";
import { StepperContexts } from "../contexts/StepperContexts";

const WhereFrom = ({ handleClick, currentStep, steps }) => {
  // const [userData, setUserData] = useState("");
  const { userData, setUserData } = useContext(StepperContexts);
  const [activeUser, isLoading] = useActiveUser();

  const email = activeUser?.email;

  const [admin] = useAdmin(activeUser);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    if (!email) {
      Swal.fire({
        title: "Do you register for shipping?",
        icon: "question",
      });
    } else if (admin) {
      Swal.fire({
        title: "Admin Can't make shipment",
        icon: "error",
      });
    } else {
      const shippingFrom = {
        email: email,
        companyName: data?.companyName,
        number: data?.number,
        country: data?.country,
        originAddress: data?.originAddress,
        postalCode: data?.postalCode,
      };
      setUserData({ ...userData, shippingFrom });
      handleClick("next");
    }
  };
  // console.log("WhereFrom data", userData);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-accent font-semibold text-2xl font-sans text-left">
        Hello. Where are you Shipping From?
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
              className="input input-bordered  cursor-not-allowed"
              defaultValue={email}
              readOnly
              {...register("email")}
            />
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
              className="input input-bordered input-success "
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
              className="input input-bordered input-success "
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
                Country
              </span>
            </label>
            <input
              type="text"
              placeholder="Country"
              defaultValue="Bangladesh"
              className="input input-bordered input-success "
              {...register("country")}
            />
          </div>

          {/* origin address */}

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold font-sans text-accent">
                Office Address ( origin: )*
              </span>
            </label>
            <select
              type="text"
              className="select select-bordered "
              {...register("originAddress", {
                required: {
                  value: true,
                  message: "Origin Address Required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9 ]*$/,
                  message:
                    "Origin Address must needed without comma, colon, hiphen",
                },
              })}
            >
              <option disabled defaultValue>
                Pick your Origin (From:)
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Faridpur">Faridpur</option>
              <option value="Gazipur">Gazipur</option>
              <option value="Gopalganj">Gopalganj</option>
              <option value="Jamalpur">Jamalpur</option>
              <option value="Kishoreganj">Kishoreganj</option>
              <option value="Madaripur">Madaripur</option>
              <option value="Manikganj">Manikganj</option>
              <option value="Munshiganj">Munshiganj</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Narayanganj">Narayanganj</option>
              <option value="Narsingdi">Narsingdi</option>
              <option value="Netrokona">Netrokona</option>
              <option value="Rajbari">Rajbari</option>
              <option value="Shariatpur">Shariatpur</option>
              <option value="Sherpur">Sherpur</option>
              <option value="Tangail">Tangail</option>
              <option value="Bogura">Bogura</option>
              <option value="Joypurhat">Joypurhat</option>
              <option value="Naogaon">Naogaon</option>
              <option value="Natore">Natore</option>
              <option value="Nawabganj">Nawabganj</option>
              <option value="Pabna">Pabna</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Sirajgonj">Sirajgonj</option>
              <option value="Dinajpur">Dinajpur</option>
              <option value="Gaibandha">Gaibandha</option>
              <option value="Kurigram">Kurigram</option>
              <option value="Lalmonirhat">Lalmonirhat</option>
              <option value="Nilphamari">Nilphamari</option>
              <option value="Panchagarh">Panchagarh</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Thakurgaon">Thakurgaon</option>
              <option value="Barguna">Barguna</option>
              <option value="Barishal">Barishal</option>
              <option value="Bhola">Bhola</option>
              <option value="Jhalokati">Jhalokati</option>
              <option value="Patuakhali">Patuakhali</option>
              <option value="Pirojpur">Pirojpur</option>
              <option value="Bandarban">Bandarban</option>
              <option value="Brahmanbaria">Brahmanbaria</option>
              <option value="Chandpur">Chandpur</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Cumilla">Cumilla</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
              <option value="Feni">Feni</option>
              <option value="Khagrachari">Khagrachari</option>
              <option value="Lakshmipur">Lakshmipur</option>
              <option value="Noakhali">Noakhali</option>
              <option value="Rangamati">Rangamati</option>
              <option value="Habiganj">Habiganj</option>
              <option value="Maulvibazar">Maulvibazar</option>
              <option value="Sunamganj">Sunamganj</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Bagerhat">Bagerhat</option>
              <option value="Chuadanga">Chuadanga</option>
              <option value="Jashore">Jashore</option>
              <option value="Jhenaidah">Jhenaidah</option>
              <option value="Khulna">Khulna</option>
              <option value="Kushtia">Kushtia</option>
              <option value="Magura">Magura</option>
              <option value="Meherpur">Meherpur</option>
              <option value="Narail">Narail</option>
              <option value="Satkhira">Satkhira</option>
            </select>
            <label className="label my-1 py-0">
              {errors.originAddress?.type === "required" && (
                <span className="label-text-alt text-red-500 ">
                  {errors.originAddress.message}
                </span>
              )}
              {errors.originAddress?.type === "pattern" && (
                <span className="label-text-alt text-red-500 ">
                  {errors.originAddress.message}
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
              className="input input-bordered input-success "
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
        className={`bg-white mt-4 text-slate-400 uppercase py-2 px-8 rounded mr-6 font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>
    </div>
  );
};

export default WhereFrom;
