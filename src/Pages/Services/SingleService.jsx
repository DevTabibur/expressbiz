import "./SingleService.css";
import { useParams } from "react-router-dom";
import useSingleService from "../../Hooks/useSingleService";

const SingleService = () => {
  const { id } = useParams();
  const [singleService] = useSingleService(id);

  const { _id, title, description, image } = singleService;
  return (
    <div className="bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-1">
          <h1 className="text-3xl font-bold  text-primary my-4">
            {title}
          </h1>
          <figure>
            <img src={`http://localhost:5000/${image}`} alt="service_image" />
          </figure>
          <p className="mt-8  text-neutral-focus">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
