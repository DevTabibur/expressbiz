import { Link } from "react-router-dom";
import "./BookShipping.css";

const BookShipping = () => {
  return (
    <>
      <div className="book-shipping py-44">
        <div className="inner-text">
          <h1 className=" text-white  font-bold md:text-2xl pb-2">
            WE PROVIDE
          </h1>
          <h2 className="text-white  font-bold md:text-4xl pb-12">
            THE BEST FREIGHT and COURIER SERVICES
          </h2>
          <Link
            className="border-2 border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200"
            to="/contact-us"
          >
            Contact With Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default BookShipping;
