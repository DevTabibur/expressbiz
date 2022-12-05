import "./NotFound.css";
import NotFoundPic from "../../Assets/images/404.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto px-24 py-12">
        <div className="grid md:grid-cols-1 gap-4">
          <div className="text-center mx-auto">
            <img
              className="mx-auto mb-6"
              src={NotFoundPic}
              alt="Not_Found_Pic"
            />
            <p className="text-accent  text-sm font-medium">Handling 404 page not found in React Router</p>
            <button
              onClick={() => navigate(-1)}
              className="btn btn-primary text-white  font-medium mt-12"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
