import React from "react";
import { Link } from "react-router-dom";
import useCreateShipping from "../../Hooks/useShipping";
import ShowShipmentHistory from "./ShowShipmentHistory";

const ShipmentHistory = () => {
  const [orders] = useCreateShipping();
  const handlePayment = (id) => {
    alert(id);
  };
  const id = 12121212;
  return (
    <>
      <h1 className="text-accent text-5xl font-bold font-serif">
        Your Shipment History
      </h1>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-1 gap-4">
          <div className="overflow-x-auto">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th className="bg-accent text-white">SL</th>
                  <th className="bg-accent text-white">#SKU</th>
                  <th className="bg-accent text-white">PRODUCT NAME</th>
                  <th className="bg-accent text-white">TYPE</th>
                  <th className="bg-accent text-white">STATUS</th>
                  <th className="bg-accent text-white">ACTION</th>
                  <th className="bg-accent text-white">ACTION</th>
                </tr>
              </thead>

              {orders.map((order, idx) => (
                <tbody key={idx}>
                  <tr>
                    <td>{idx + 1}</td>
                    <td>SKU</td>
                    <td>Name</td>
                    <td>Air</td>
                    <td>Pending</td>
                    <td>
                      <Link to={`/dashboard/payment/${order._id}`}>Pay </Link>
                    </td>
                    <td>Delete</td>
                  </tr>
                </tbody>
              ))}

              <tfoot>
                <tr>
                  <th className="bg-accent text-white">SL</th>
                  <th className="bg-accent text-white">#SKU</th>
                  <th className="bg-accent text-white">PRODUCT NAME</th>
                  <th className="bg-accent text-white">TYPE</th>
                  <th className="bg-accent text-white">STATUS</th>
                  <th className="bg-accent text-white">ACTION</th>
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
