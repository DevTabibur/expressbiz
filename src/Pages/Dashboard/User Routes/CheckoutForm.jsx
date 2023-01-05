import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useActiveUser from "../../../Hooks/useActiveUser";
import Loader from "../../../Shared/Loader/Loader";

const CheckoutForm = ({ singleOrder }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionID, setTransactionID] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [activeUser, isLoading] = useActiveUser();

  const { _id, email, productName, price } = singleOrder;
  useEffect(() => {
    if (price !== undefined) {
      // Create PaymentIntent as soon as the page loads
      fetch("http://localhost:5000/api/v1/payment/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log('data', data?.clientSecret)
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [price]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: productName,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionID(paymentIntent.id);
      setSuccess("Congrats!. Your payment is completed");

      //store payment on database
      const payment = {
        email: activeUser?.email,
        price: price,
        shippingOrder: _id,
        transactionId: paymentIntent.id,
      };

      const url = `http://localhost:5000/api/v1/shipping/${_id}`;
      fetch(url, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          // console.log("data updated patch", data);
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
    }
  };

  // if (processing) {
  //   return <Loader />;
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="w-full text-white bg-accent btn mt-6 mb-2"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <div className="text-green-500">
          <p>{success}</p>
          <p>Your transaction ID : {transactionID}</p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
