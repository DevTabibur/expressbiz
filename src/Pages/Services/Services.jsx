import useService from "../../Hooks/useService";
import MappingServices from "./MappingServices";
import "./Services.css";

const Services = () => {
  const [services] = useService();
  // console.log('services', services)
  return (
    <>
     <div className="page-title shadow">
        <div className="container mx-auto px-4">
          <div className=" text-center my-12">
            <h2 className="text-4xl font-bold text-white font-serif">Our Services</h2>
            <p className="mb-4 text-center text-sm font-mono text-white">You can see our service list here</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif font-bold text-center">
          OUR SERVICES
        </h1>
        <p className="text-center pt-2 pb-6 font-sans">
          or continuous professional and business development, I obtained a{" "}
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
