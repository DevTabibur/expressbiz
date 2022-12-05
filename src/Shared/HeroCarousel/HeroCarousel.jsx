import "./HeroCarousel.css";
import carousel1 from "../../Assets/images/air freight.png";
import carousel2 from "../../Assets/images/logistic freight 11.jpg";
import carousel3 from "../../Assets/images/ocean_freight_feat.jpg";
import "tw-elements";

const HeroCarousel = () => {
  return (
    <div className="mt-0">
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark relative custom-css shadow-2xl"
        data-bs-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        {/* <!-- Inner --> */}
        <div className="carousel-inner w-full  overflow-hidden custom-css-inner relative">
          {/* <!-- Single item --> */}
          <div className="carousel-item active relative float-left w-full">
            <img
              src={carousel3}
              className="block w-full "
              alt="Motorbike Smoke"
            />
            <div className="custom-css-inner-info m-auto text-primary">
              <p className="uppercase mb-4 font-semibold text-2xl">
                We Are Proud
              </p>
              <h5 className="text-5xl font-bold">TO BE ALWAYS ON DEMAND</h5>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item relative float-left w-full">
            <img src={carousel2} className="block w-full " alt="Mountaintop" />
            <div className="custom-css-inner-info m-auto text-primary">
              <p className="uppercase mb-4 font-semibold text-2xl">
                We Are Proud
              </p>
              <h5 className="text-5xl font-bold">TO BE ALWAYS ON DEMAND</h5>
            </div>
          </div>
          {/* <!-- Single item --> */}
          <div className="carousel-item relative float-left w-full">
            <img src={carousel1} className="block w-full " alt="Mountaintop" />
            <div className="custom-css-inner-info m-auto  text-primary">
              <p className="uppercase mb-4 font-semibold text-2xl">
                We Are Proud
              </p>
              <h5 className="text-5xl font-bold">TO BE ALWAYS ON DEMAND</h5>
            </div>
          </div>
        </div>
        {/* <!-- Inner --> */}

        {/* <!-- Controls --> */}
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
