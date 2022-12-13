import "./SingleService.css";
import { useParams } from "react-router-dom";
import useSingleService from "../../Hooks/useSingleService";

const SingleService = () => {
  const { id } = useParams();
  const [singleService] = useSingleService(id);

  // const { title, description, image } = singleService;
  return (
    <div className=" bg-success py-20">
    <div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-1 text-center">
          <h1 className="text-3xl font-bold  text-accent mb-4">Welcome to {singleService?.title}</h1>
          <figure>
            <img className="w-full h-96 rounded shadow-2xl " src={`http://localhost:5000/${singleService?.image}`} alt="service_image" />
          </figure>
          <p className="mt-8  text-info">{singleService?.description}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SingleService;
