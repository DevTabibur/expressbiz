import React, { useContext, useEffect } from "react";
import { StepperContexts } from "../contexts/StepperContexts";

const Review = () => {
  const { userData, setUserData } = useContext(StepperContexts);
  const review = [userData];

  let price;

  const weight = userData?.what?.weight;
  const distance = userData?.distance;

  if (weight && distance) {
    // 1kg = 5tk

    price = weight * 5;
    // 1 km => 2.40 tk

    price = distance * 2.4;
  }

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-accent font-semibold text-2xl font-sans text-left">
          Let's make sure everything is in order
        </h1>
        <p className="text-neutral-focus font-mono mb-8">
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
                <p className="text-accent font-serif mt-2">
                  {userData?.shippingFrom?.address},
                  {userData?.shippingFrom?.country}
                </p>
              )}
              {userData?.shippingFrom?.email && (
                <p className="text-accent font-serif mt-2">
                  Email : {userData?.shippingFrom?.email}
                </p>
              )}
              {userData?.shippingFrom?.companyName && (
                <p className="text-accent font-serif mt-2">
                  Company / Name : {userData?.shippingFrom?.companyName}
                </p>
              )}
              {userData?.shippingFrom?.postalCode && (
                <p className="text-accent font-serif mt-2">
                  Postal Code : {userData?.shippingFrom?.postalCode}
                </p>
              )}
              {userData?.shippingFrom?.number && (
                <p className="text-accent font-serif mt-2">
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
                <p className="text-accent font-serif mt-2">
                  {userData?.shippingGoing?.address},
                  {userData?.shippingGoing?.country}
                </p>
              )}

              {userData?.shippingGoing?.email && (
                <p className="text-accent font-serif mt-2">
                  Email : {userData?.shippingGoing?.email}
                </p>
              )}

              {userData?.shippingGoing?.companyName && (
                <p className="text-accent font-serif mt-2">
                  Company / Name : {userData?.shippingGoing?.companyName}
                </p>
              )}

              {userData?.shippingGoing?.number && (
                <p className="text-accent font-serif mt-2">
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
                <p className="text-accent font-serif mt-2">
                  {userData?.shippingFrom?.address},
                  {userData?.shippingFrom?.country}
                </p>
              )}
              {userData?.shippingFrom?.email && (
                <p className="text-accent font-serif mt-2">
                  Email : {userData?.shippingFrom?.email}
                </p>
              )}
              {userData?.shippingFrom?.companyName && (
                <p className="text-accent font-serif mt-2">
                  Company / Name : {userData?.shippingFrom?.companyName}
                </p>
              )}
              {userData?.shippingFrom?.postalCode && (
                <p className="text-accent font-serif mt-2">
                  Postal Code : {userData?.shippingFrom?.postalCode}
                </p>
              )}
              {userData?.shippingFrom?.number && (
                <p className="text-accent font-serif mt-2">
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

            <p className="text-accent font-serif mt-2">
              Product Name : {userData?.what?.productName}
            </p>
            <p className="text-accent font-serif mt-2">
              Shipping Type : {userData?.what?.shipmentType} Freight
            </p>
            <p className="text-accent font-serif mt-2">
              Weight : {userData?.what?.weight} kg
            </p>
            <p className="text-accent font-serif mt-2">
              Distance : {userData?.distance} km
            </p>

            {userData?.what?.width && (
              <p className="text-accent font-serif mt-2">
                Width : {userData?.what?.width} inch
              </p>
            )}
          </div>

          <h1 className="font-bold text-accent text-xl font-sans mb-2">
            Payment
          </h1>
          <p className="text-neutral-focus font-mono mb-8">
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

            <p className="text-accent font-serif mt-2">
              Bill Shipping Charge To : Card
            </p>
            <p className="text-accent font-serif mt-2">
              Bill Duties and Taxes To : Receive company
            </p>
            <p className="text-accent font-serif mt-2">
              Charge (Taxes) : tk {price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
