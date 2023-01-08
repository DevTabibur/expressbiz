import { useNavigate } from "react-router-dom";

const ShowManageServices = ({ service, deleteService }) => {
  const navigate = useNavigate();
  const { _id, title, description, image } = service;

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="w-full">
          <img
            className="relative w-full h-56"
            src={`https://expressbiz-server-re-deploy.onrender.com/${image}`}
            alt="shipping_images"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description && description.slice(0, 100)}...</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => deleteService(_id)}
              className="btn btn-accent text-white "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowManageServices;
