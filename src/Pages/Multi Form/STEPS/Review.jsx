import React, { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { StepperContexts } from "../contexts/StepperContexts";

const Review = ({ handleClick, currentStep, steps }) => {
  const { userData, setUserData } = useContext(StepperContexts);

  let price;

  const weight = userData?.what?.weight;
  const getDistance = userData?.what?.distance;

  if (weight && getDistance) {
    // 1kg = 1tk
    // 1 km => 1.40 tk
    price = Math.round(weight * 1 + getDistance * 1.4);
  }

  const shipmentInfo = {
    senderEmail: userData.shippingFrom?.email,
    senderCompanyName: userData.shippingFrom?.companyName,
    senderContact: userData.shippingFrom?.number,
    senderCountry: userData.shippingFrom?.country,
    senderOriginAddress: userData.shippingFrom?.originAddress,
    senderPostalCode: userData.shippingFrom?.postalCode,

    receiverEmail: userData.shippingGoing?.email,
    receiverCompanyName: userData.shippingGoing?.companyName,
    receiverContact: userData.shippingGoing?.number,
    receiverCountry: userData.shippingGoing?.country,
    receiverDestinationAddress: userData.shippingGoing?.destinationAddress,
    receiverPostalCode: userData.shippingGoing?.postalCode,

    productName: userData.what?.productName,
    shipmentType: userData.what?.shipmentType,
    weight: userData.what?.weight,
    width: userData.what?.width,
    distance: getDistance,

    billMethod: "card",
    billDutiesTaxes: "Company",
    currency: "tk",
    price: price,
  };

  const handleData = async (data, e) => {
    const url = `http://localhost:5000/api/v1/shipping`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(shipmentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("shipment data posted from review", data);
        if (data.code === 400) {
          Swal.fire({
            title: data?.status,
            text: data?.message,
            icon: "error",
          });
        } else {
          Swal.fire({
            title: data?.status,
            text: data?.message,
            icon: "success",
          });
        }
      });

    handleClick("next");
  };

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-accent font-semibold text-2xl font-sans text-left">
          Let's make sure everything is in order
        </h1>
        <p className="text-neutral-focus  mb-8">
          <strong>N.B Go to dashboard for payment</strong>
        </p>

        <h1 className="font-bold text-accent text-xl font-sans mb-2">Where</h1>
        <hr className="mb-6"></hr>

        {/* basic info about shipping */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* grid 1 */}
          {userData?.shippingFrom ? (
            <div className="bg-white shadow p-4 rounded">
              <h2 className="text-accent font-semibold mb-2">Ship From</h2>
              <hr></hr>
              {userData?.shippingFrom?.address && (
                <p className="text-accent  mt-2">
                  {userData?.shippingFrom?.address},
                  {userData?.shippingFrom?.country}
                </p>
              )}
              {userData?.shippingFrom?.email && (
                <p className="text-accent  mt-2">
                  Email : {userData?.shippingFrom?.email}
                </p>
              )}
              {userData?.shippingFrom?.companyName && (
                <p className="text-accent  mt-2">
                  Company / Name : {userData?.shippingFrom?.companyName}
                </p>
              )}
              {userData?.shippingFrom?.postalCode && (
                <p className="text-accent  mt-2">
                  Postal Code : {userData?.shippingFrom?.postalCode}
                </p>
              )}
              {userData?.shippingFrom?.number && (
                <p className="text-accent  mt-2">
                  Number : {userData?.shippingFrom?.number}
                </p>
              )}
            </div>
          ) : (
            <h2 className="text-center text-accent font-semibold text-2xl">
              Please fill up your shipment
            </h2>
          )}

          {/* grid 2 */}
          {userData?.shippingGoing ? (
            <div className="bg-white shadow p-4 rounded">
              <h2 className="text-accent font-semibold mb-2">Ship To</h2>
              <hr></hr>

              {userData?.shippingGoing?.address && (
                <p className="text-accent  mt-2">
                  {userData?.shippingGoing?.address},
                  {userData?.shippingGoing?.country}
                </p>
              )}

              {userData?.shippingGoing?.email && (
                <p className="text-accent  mt-2">
                  Email : {userData?.shippingGoing?.email}
                </p>
              )}

              {userData?.shippingGoing?.companyName && (
                <p className="text-accent  mt-2">
                  Company / Name : {userData?.shippingGoing?.companyName}
                </p>
              )}

              {userData?.shippingGoing?.number && (
                <p className="text-accent  mt-2">
                  Number : {userData?.shippingGoing?.number}
                </p>
              )}
            </div>
          ) : (
            <h2 className="text-center text-accent font-semibold text-2xl">
              Please fill up your shipment
            </h2>
          )}

          {/* grid 3 */}
          {userData?.shippingFrom ? (
            <div className="bg-white shadow p-4 rounded">
              <h2 className="text-accent font-semibold mb-2">Return To</h2>
              <hr></hr>
              {userData?.shippingFrom?.address && (
                <p className="text-accent  mt-2">
                  {userData?.shippingFrom?.address},
                  {userData?.shippingFrom?.country}
                </p>
              )}
              {userData?.shippingFrom?.email && (
                <p className="text-accent  mt-2">
                  Email : {userData?.shippingFrom?.email}
                </p>
              )}
              {userData?.shippingFrom?.companyName && (
                <p className="text-accent  mt-2">
                  Company / Name : {userData?.shippingFrom?.companyName}
                </p>
              )}
              {userData?.shippingFrom?.postalCode && (
                <p className="text-accent  mt-2">
                  Postal Code : {userData?.shippingFrom?.postalCode}
                </p>
              )}
              {userData?.shippingFrom?.number && (
                <p className="text-accent  mt-2">
                  Number : {userData?.shippingFrom?.number}
                </p>
              )}
            </div>
          ) : (
            <h2 className="text-center text-accent font-semibold text-2xl">
              Please fill up your shipment
            </h2>
          )}
        </div>

        <div className="grid md:grid-cols-1 mt-8 gap-4">
          <h1 className="font-bold text-accent text-xl font-sans mb-2">What</h1>
          <hr className="mb-2"></hr>

          <div className="bg-white shadow p-4 rounded">
            <h2 className="text-accent font-semibold mb-2">
              Shipment Information
            </h2>
            <hr></hr>

            <p className="text-accent  mt-2">
              Product Name : {userData?.what?.productName}
            </p>
            <p className="text-accent  mt-2">
              Shipping Type : {userData?.what?.shipmentType} Freight
            </p>
            <p className="text-accent  mt-2">
              Weight : {userData?.what?.weight} kg
            </p>
            <p className="text-accent  mt-2">
              Distance : {userData?.what?.distance} km
            </p>

            {userData?.what?.width && (
              <p className="text-accent  mt-2">
                Width : {userData?.what?.width} inch
              </p>
            )}
          </div>

          <h1 className="font-bold text-accent text-xl font-sans mb-2">
            Payment
          </h1>
          <p className="text-neutral-focus  mb-8">
            <strong>
              Confirm Your order. We'll send you how much you have to pay for
              this shipment?
            </strong>
          </p>
          <hr className="mb-2"></hr>

          <div className="bg-white shadow p-4 rounded">
            <h2 className="text-accent font-semibold mb-2">
              Payment Information
            </h2>
            <hr></hr>

            <p className="text-accent  mt-2">Bill Shipping Charge To : Card</p>
            <p className="text-accent  mt-2">
              Bill Duties and Taxes To : Receive company
            </p>
            <p className="text-accent  mt-2">
              Charge (Taxes) : tk. {Math.round(price)}
            </p>
          </div>
        </div>
        <button
          onClick={() => handleData()}
          type="submit"
          className="text-white mt-6 bg-green-500 uppercase py-2 px-8 rounded font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
        >
          {currentStep === steps.length - 1 ? "Confirm" : "Next"}
        </button>
      </div>
    </>
  );
};

export default Review;
