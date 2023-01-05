import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { StepperContexts } from "../contexts/StepperContexts";
import PackageImage from "../../../Assets/images/package.jpg";
import geoDistance from "geo-distance-helper";
const What = ({ handleClick, currentStep, steps }) => {
  // const [origin, setOrigin] = useState("");
  // const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState("");

  const { userData, setUserData } = useContext(StepperContexts);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const origin = userData?.shippingFrom?.originAddress;
  const destination = userData?.shippingGoing?.destinationAddress;

  // const origin = "Dhaka";
  // const destination = "Khulna Zero Point";

  let originResponse;
  let destinationResponse;

  const fetchData = async () => {
    if (origin) {
      const originUrl = `https://api.opencagedata.com/geocode/v1/json?q=${origin}&key=2d273276e2dc4ed9889aa028ffd03671`;
      const response = await fetch(originUrl);
      const getResponseOrigin = await response.json();
      // console.log("getResponse origin", getResponseOrigin);
      originResponse = getResponseOrigin;
    }

    if (destination) {
      const destinationUrl = `https://api.opencagedata.com/geocode/v1/json?q=${destination}&key=2d273276e2dc4ed9889aa028ffd03671`;
      const response = await fetch(destinationUrl);
      const getResponseDestination = await response.json();
      // console.log("getResponse destination", getResponseDestination);
      destinationResponse = getResponseDestination;
    }

    // origin lat and lng
    const originLat = await originResponse.results[0].geometry.lat;
    const originLng = await originResponse.results[0].geometry.lng;

    // destination lat and lng
    const destinationLat = await destinationResponse.results[0].geometry.lat;
    const destinationLng = await destinationResponse.results[0].geometry.lng;

    // calculate the origin and destination lat nd lng
    const origin1 = { lat: originLat, lng: originLng };
    const destination2 = { lat: destinationLat, lng: destinationLng };

    const distance = geoDistance(origin1, destination2, "K");
    await setDistance(Math.round(distance));
  };

  fetchData();

  const onSubmit = async (data, e) => {
    const what = {
      productName: data?.productName,
      shipmentType: data?.shipmentType,
      weight: data?.weight,
      width: data?.width,
      distance: distance,
    };
    setUserData({ ...userData, what });
    handleClick("next");
  };

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-accent font-semibold text-2xl font-sans text-left">
          what kind of packaging are you using?
        </h1>
        <p className="text-neutral-focus  mb-8">*indicates require file</p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* form div */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-4">
                {/* product Name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold font-sans text-accent">
                      Product Name*
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Product Name*"
                    className="input  input-bordered input-success "
                    {...register("productName", {
                      required: {
                        value: true,
                        message: "Product Name must be included",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.productName?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.productName.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* shipment type */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold font-sans text-accent">
                      Shipment Type*
                    </span>
                  </label>
                  <select
                    className="select select-bordered select-success w-full max-w-xs"
                    {...register("shipmentType", {
                      required: {
                        value: true,
                      },
                      message: "Shipment Type must be included",
                    })}
                  >
                    <option disabled>Pick your Shipment</option>
                    <option value="Air">Air Freight</option>
                    <option value="Ocean">Ocean Freight</option>
                    <option value="Logistic Service">
                      Logistic Service Freight
                    </option>
                    <option value="Supply Service">
                      Supply Service Freight
                    </option>
                    <option value="Others Service">Others Freight</option>
                  </select>
                  <label className="label my-1 py-0">
                    {errors.shipmentType?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.shipmentType.message}
                      </span>
                    )}
                  </label>
                </div>

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
                    className="input  input-bordered input-success "
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
                      <span className="label-text-alt text-red-500 ">
                        {errors.weight.message}
                      </span>
                    )}
                    {errors.weight?.type === "pattern" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.weight.message}
                      </span>
                    )}
                  </label>
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
                    className="input  input-bordered input-success "
                    {...register("width")}
                  />
                </div>

                {/* origin */}
                <div className="form-control  cursor-not-allowed">
                  <label className="label">
                    <span className="label-text font-bold">
                      Pick your Origin (From:)
                    </span>
                  </label>
                  <select
                    type="text"
                    className="select select-bordered  cursor-not-allowed"
                    defaultValue={origin}
                    {...register("origin")}
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
                </div>

                {/* destination */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Destination Address with city
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Destination Address"
                    className="input input-bordered "
                    defaultValue={destination}
                    {...register("destination")}
                  />
                </div>

                {/* distance */}
                {/* <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Distance</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Destination Address"
                    className="input input-bordered "
                    defaultValue={distance}
                    {...register("distance")}
                  />
                </div> */}
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
