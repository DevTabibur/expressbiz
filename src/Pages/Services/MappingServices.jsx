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
        <figure className="w-96">
          <img
            className="relative w-96 h-56"
            src={`http://localhost:5000/${image}`}
            alt="shipping_images"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description && description.slice(0, 25)}...</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => navigate(`/service/${_id}`)}
              className="border-2 border-accent rounded-lg px-3 py-2 text-accent cursor-pointer hover:bg-accent hover:text-white hover:shadow-2xl "
            >
              Read More ...
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MappingServices;
