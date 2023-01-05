import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import usePaymentCollection from "../../../Hooks/usePaymentCollection";

const PaymentCollection = () => {
  const [paymentCollection] = usePaymentCollection();

  const deletePaymentCollection = (id) => {
    const confirmation = window.confirm("Are You want to Delete?");

    if (confirmation) {
      const url = `http://localhost:5000/api/v1/payment/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("deleted", data);
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

  return (
    <div className="container mx-auto px-4 ">
      <h1 className="text-accent font-bold text-3xl font-sans mb-4">
        Total Payment : {paymentCollection.length}
      </h1>
      {paymentCollection.length && (
        <div className="grid md:grid-cols-1 gap-4">
          <div className="overflow-x-auto">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Email</th>
                  <th>TransactionId</th>
                  <th>Order ID</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {paymentCollection.map((pay, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{pay.email}</td>
                    <td>{pay.transactionId}</td>
                    <td>{pay.shippingOrder}</td>
                    <td>${pay.price}</td>
                    <td onClick={() => deletePaymentCollection(pay._id)}>
                      <button className="btn btn-sm btn-primary">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>SL</th>
                  <th>Email</th>
                  <th>TransactionId</th>
                  <th>Order ID</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentCollection;
