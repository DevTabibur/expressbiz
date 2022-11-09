import React, { useContext } from "react";
import { StepperContexts } from "../contexts/StepperContexts";

const Review = () => {
  const { userData, setUserData } = useContext(StepperContexts);
  console.log("userData on review", userData);
  const review = [userData];
  // console.log("review", userData?.what);
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
          <div className="bg-white shadow p-4 rounded">
            <h2 className="text-accent font-semibold mb-2">Ship From</h2>
            <hr></hr>

            <p className="text-accent font-serif mt-2">
              {userData?.shippingFrom?.address},
              {userData?.shippingFrom?.country}
            </p>
            <p className="text-accent font-serif mt-2">
              Email : {userData?.shippingFrom?.email}
            </p>
            <p className="text-accent font-serif mt-2">
              Company / Name : {userData?.shippingFrom?.companyName}
            </p>
            <p className="text-accent font-serif mt-2">
              Number : {userData?.shippingFrom?.number}
            </p>
          </div>

          <div className="bg-white shadow p-4 rounded">
            <h2 className="text-accent font-semibold mb-2">Ship To</h2>
            <hr></hr>

            <p className="text-accent font-serif mt-2">
              {userData?.shippingGoing?.address},
              {userData?.shippingGoing?.country}
            </p>
            <p className="text-accent font-serif mt-2">
              Email : {userData?.shippingGoing?.email}
            </p>
            <p className="text-accent font-serif mt-2">
              Company / Name : {userData?.shippingGoing?.companyName}
            </p>
            <p className="text-accent font-serif mt-2">
              Number : {userData?.shippingGoing?.number}
            </p>
          </div>

          <div className="bg-white shadow p-4 rounded">
            <h2 className="text-accent font-semibold mb-2">Return To</h2>
            <hr></hr>

            <p className="text-accent font-serif mt-2">
              {userData?.shippingFrom?.address},
              {userData?.shippingFrom?.country}
            </p>
            <p className="text-accent font-serif mt-2">
              Email : {userData?.shippingFrom?.email}
            </p>
            <p className="text-accent font-serif mt-2">
              Company / Name : {userData?.shippingFrom?.companyName}
            </p>
            <p className="text-accent font-serif mt-2">
              Number : {userData?.shippingFrom?.number}
            </p>
          </div>
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
              Weight : {userData?.what?.weight} kg
            </p>
            <p className="text-accent font-serif mt-2">
              Height : {userData?.what?.height} inch
            </p>
            <p className="text-accent font-serif mt-2">
              Width : {userData?.what?.width} inch
            </p>
            <p className="text-accent font-serif mt-2">
              Length : {userData?.what?.length} inch
            </p>
          </div>

          <h1 className="font-bold text-accent text-xl font-sans mb-2">
            Payment
          </h1>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
