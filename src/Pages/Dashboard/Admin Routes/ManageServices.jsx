import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useService from "../../../Hooks/useService";
import ShowManageServices from "./ShowManageServices";

const ManageServices = () => {
  const navigate = useNavigate();
  const [services] = useService();
  // console.log("service", services);
  const deleteService = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data deleted", data);
        if (data.code === 401 || data.code === 403) {
          localStorage.removeItem("user_id");
          navigate("/login");
        }
        if (data.deletedCount) {
          Swal.fire({
            title: "Service Deleted",
            icon: "success",
          });
        }
      });
  };
  return (
    <>
      <h1 className="text-accent text-5xl font-bold font-serif">
        Manage Services
      </h1>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <ShowManageServices
              key={idx}
              service={service}
              deleteService={deleteService}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageServices;
