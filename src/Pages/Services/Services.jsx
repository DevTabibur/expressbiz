import useService from "../../Hooks/useService";
import MappingServices from "./MappingServices";
import "./Services.css";

const Services = () => {
  const [services] = useService();
  // console.log('services', services)
  return (
    <>
      <div className="container mx-auto px-4 py-16 my-4">
        <h1 className="text-4xl  font-bold text-center">
          OUR SERVICES {services.length}
        </h1>
        <p className="text-center pt-2 pb-6 font-sans">
          Here you can find our best services, that we are providing with our
          best
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <MappingServices key={idx} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
