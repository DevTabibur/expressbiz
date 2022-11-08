import MultiForm from "../Multi Form/MultiForm";
import "./Shipping.css";

const Shipping = () => {
  return (
    <>
      {/* <div className="page-title shadow">
        <div className="container mx-auto px-4">
          <div className=" text-center my-12">
            <h2 className="text-4xl font-bold text-white font-serif">
              Create your shipment
            </h2>
            <p className="mb-4 text-center text-sm font-mono text-white">
              You can create your shipment here, after registration our site
            </p>
          </div>
        </div>
      </div> */}
      <div className="shipping">
        <MultiForm />
      </div>
    </>
  );
};

export default Shipping;
