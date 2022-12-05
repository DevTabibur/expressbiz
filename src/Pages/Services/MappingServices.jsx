import "./MappingServices.css";
import { useNavigate } from "react-router-dom";
const MappingServices = ({ service }) => {
  // console.log('service', service)
  const navigate = useNavigate();
  const { _id, title, description, image } = service;
  // console.log("image", image);
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="relative">
          <img
            className="relative w-96 h-96"
            src={`http://localhost:5000/${image}`}
            alt="shipping_images"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description && description.slice(0, 100)}...</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/service/${_id}`)}
              className="btn btn-accent text-white "
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MappingServices;
