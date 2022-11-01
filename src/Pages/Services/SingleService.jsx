import "./SingleService.css";
import { useParams } from "react-router-dom";
import useSingleService from "../../Hooks/useSingleService";

const SingleService = () => {
  const { id } = useParams();
  const [singleService] = useSingleService(id);
  console.log('first', singleService)
  return <div>SingleService</div>;
};

export default SingleService;
