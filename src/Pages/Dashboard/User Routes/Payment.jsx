import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4JVuA39z7TXqPSg5UDBbSy1LBrOiJpXPYtM1YLg9fScUUnADN0zFqetXNg7HGkgO0go5P0CcXWw0SgZg5Hkps500SD41aRrD"
);

const Payment = () => {
  const { id } = useParams();
  const [singleOrder, setSingleOrder] = useState({});

  useEffect(() => {
    const url = `https://expressbiz-server-re-deploy.onrender.com/api/v1/shipping/${id}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("single id data", data.data);
        setSingleOrder(data?.data);
      });
  }, [singleOrder, id]);

 
  return (
    <>
      <h1 className="text-accent text-3xl font-sans font-bold">ID is: {id}</h1>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-1 gap-4">
          <div className="card w-96 bg-base-100 shadow-xl p-4">
            <h1 className="text-accent text-2xl font-bold">
              Please Pay for: {singleOrder?.productName}
            </h1>
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm singleOrder={singleOrder} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
