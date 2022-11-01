import "./BookShipping.css";

const BookShipping = () => {
  return (
    <>
      <div className="book-shipping py-44">
        <div className="inner-text">
          <h1 className=" text-white font-serif font-bold md:text-2xl pb-2">
            WE PROVIDE
          </h1>
          <h2 className="text-white font-serif font-bold md:text-4xl pb-4">
            THE BEST SEA AND AIR FREIGHT SERVICES
          </h2>
          <h5 className="text-primary font-serif font-bold text-xl pb-6">
            For Book Your Shipping From Any Country{" "}
          </h5>
          <button className="btn btn-accent text-white font-serif">
            Contact With Us
          </button>
        </div>
      </div>
    </>
  );
};

export default BookShipping;
