import React from "react";

const MappingServices = ({ service }) => {
  // console.log('service', service)
  const { title, description, image } = service;
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="shipping_images" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description && description.slice(0, 100)}...</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MappingServices;
