import useActiveUser from "../../Hooks/useActiveUser";
import useAdmin from "../../Hooks/useAdmin";
import Footer from "../../Shared/Footer/Footer";
import MultiForm from "../Multi Form/MultiForm";
import "./Shipping.css";

const Shipping = () => {
 
  return (
    <>
      {/* <div className="page-title shadow">
        <div className="container mx-auto px-4">
          <div className=" text-center my-12">
            <h2 className="text-4xl font-bold text-white ">
              Create your shipment
            </h2>
            <p className="mb-4 text-center text-sm  text-white">
              You can create your shipment here, after registration our site
            </p>
          </div>
        </div>
      </div> */}
      <div className="shipping">
        <MultiForm />
      </div>
      <Footer/>
    </>
  );
};

export default Shipping;
