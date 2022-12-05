import Loader from "../../../Shared/Loader/Loader";
import "./DestinationMap.css";

import { useContext, useEffect, useState } from "react";
import geoDistance from "geo-distance-helper";
import { useForm } from "react-hook-form";
import { StepperContexts } from "../contexts/StepperContexts";

const DestinationMap = () => {
  const { userData, setUserData } = useContext(StepperContexts);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleDestination = async (destination, origin) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${destination}&key=20ad92a2fbcb467db15d68eaf89472ad&language=en&pretty=1`;
    const response = await fetch(url);
    const getResponse = await response.json();
    // console.log('getResponse destination', getResponse)

    const originLat = await origin.results[0].geometry.lat;
    const originLng = await origin.results[0].geometry.lng;
    const destinationLat = await getResponse.results[0].geometry.lat;
    const destinationLng = await getResponse.results[0].geometry.lng;

    const origin1 = { lat: originLat, lng: originLng };

    const destination2 = { lat: destinationLat, lng: destinationLng };

    const distance = geoDistance(origin1, destination2, "K");
    await setDistance(Math.round(distance));
  };

  const onSubmit = async (data, e) => {
    await setOrigin(data.origin);
    await setDestination(data.destination);
    const origin = await data.origin;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${origin}&key=20ad92a2fbcb467db15d68eaf89472ad&language=en&pretty=1`;

    const response = await fetch(url);
    const getResponse = await response.json();
    // console.log("getResponse origin", getResponse);

    handleDestination(data.destination, getResponse);
    // handleOrigin(data.origin);
  };

  useEffect(() => {
    setUserData({ ...userData, distance });
  }, [distance]);

  console.log("destination map data", userData);

  return (
    <>
      {/* <div className="hero  bg-base-200">
        <div className="hero-content text-center">
          <div className="w-full">
            <h1 className="text-5xl font-bold mb-4">
              Please provide us routes address
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Pick your Origin (From:)
                    </span>
                  </label>
                  <select
                    type="text"
                    className="select select-bordered "
                    {...register("origin", {
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
                    {errors.origin?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.origin.message}
                      </span>
                    )}
                    {errors.origin?.type === "pattern" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.origin.message}
                      </span>
                    )}
                  </label>
                </div>

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
                    {...register("destination", {
                      required: {
                        value: true,
                        message: "Destination Address is Required",
                      },
                      pattern: {
                        value: /^[a-zA-Z0-9 ]*$/,
                        message:
                          "Destination Address must needed without comma, colon, hiphen",
                      },
                    })}
                  />
                  <label className="label my-1 py-0">
                    {errors.destination?.type === "required" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.destination.message}
                      </span>
                    )}
                    {errors.destination?.type === "pattern" && (
                      <span className="label-text-alt text-red-500 ">
                        {errors.destination.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>

              <div className="form-control">
                <input
                  type="submit"
                  className="btn btn-accent w-full mt-4"
                  value="SUBMIT"
                />
              </div>
            </form>

            {distance && (
              <div className="bg-orange-500 p-6 rounded shadow-2xl">
                <h3 className="text-2xl font-semibold">
                  {origin} to {destination} are {distance} km
                </h3>
              </div>
            )}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default DestinationMap;
