import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useActiveUser from "../../../Hooks/useActiveUser";
import useCreateShipping from "../../../Hooks/useShipping";
import ShowShipmentHistory from "./ShowShipmentHistory";

const ShipmentHistory = () => {
  const navigate = useNavigate();
  const [orders] = useCreateShipping();
  const [activeUser, activeUserData] = useActiveUser();

  const ExistsEmail = orders.filter(
    (order) => order.senderEmail === activeUserData?.email
  );

  // console.log("ExistsEmail", ExistsEmail);

  const deleteShipmentHistory = (id) => {
    const confirmation = window.confirm("Are you want to Delete?");
    if (confirmation) {
      const url = `http://localhost:5000/shipping/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data delete", data);
          if (data.code === 401 || data.code === 403) {
            localStorage.removeItem("user_id");
            navigate("/login");
            window.location.reload();
          }
          if (data.acknowledged) {
            Swal.fire({
              title: "Shipment Deleted",
              icon: "success",
            });
          }
        });
    }
  };
  return (
    <>
      <h1 className="text-accent text-5xl font-bold font-serif">
        Your Shipment History {ExistsEmail.length}
      </h1>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-1 gap-4">
          <div className="overflow-x-auto">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th className="bg-accent text-white">SL</th>
                  <th className="bg-accent text-white">EMAIL</th>
                  <th className="bg-accent text-white">PRODUCT</th>
                  <th className="bg-accent text-white">PRICE</th>

                  <th className="bg-accent text-white">TYPE</th>
                  <th className="bg-accent text-white">STATUS</th>
                  <th className="bg-accent text-white">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {ExistsEmail.map((order, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{order.senderEmail}</td>
                    <td>{order.productName}</td>
                    <td>$ {Math.round(order.price)}</td>

                    {order.price && !order.paid && (
                      <td>
                        <button className="btn btn-warning btn-sm">
                          <Link to={`/dashboard/payment/${order._id}`}>
                            Pay{" "}
                          </Link>{" "}
                        </button>
                      </td>
                    )}
                    {order.price && order.paid && (
                      <td className="text-green-500 font-semibold">PAID</td>
                    )}

                    {order.price && order.paid ? (
                      <td>transactionId : {order.transactionId}</td>
                    ) : (
                      <td>Please pay for Processing</td>
                    )}

                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => deleteShipmentHistory(order._id)}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th className="bg-accent text-white">SL</th>
                  <th className="bg-accent text-white">EMAIL</th>
                  <th className="bg-accent text-white">PRODUCT</th>
                  <th className="bg-accent text-white">PRICE</th>

                  <th className="bg-accent text-white">TYPE</th>
                  <th className="bg-accent text-white">STATUS</th>
                  <th className="bg-accent text-white">ACTION</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShipmentHistory;
