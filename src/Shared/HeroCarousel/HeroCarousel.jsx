import "./HeroCarousel.css";
import carousel1 from "../../Assets/images/air freight.png";
import carousel2 from "../../Assets/images/logistic freight 11.jpg";
import carousel3 from "../../Assets/images/ocean_freight_feat.jpg";
import carousel4 from "../../Assets/carousel/client-4.jpg";
import carousel5 from "../../Assets/carousel/client-5.jpg";
import carousel6 from "../../Assets/carousel/client-6.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Important modules do not delete
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

const HeroCarousel = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div className="container-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper shadow-2xl"
        >
          <SwiperSlide className="relative overflow-hidden ">
            <div className="image-div">
              <img className="" src={carousel1} alt="Slider1" />
            </div>
            <div className="swiper-inner-info ">
              <p className="my-4 text-white font-sans font-semibold md:text-5xl">
                We are proud
              </p>

              <h1 className="md:text-7xl my-2 font-bold font-sans text-primary ">
                TO BE ALWAYS ON DEMAND
              </h1>
              <button className="px-14 py-4 border-1 border-primary-focus text-white font-serif font-bold bg-accent rounded shadow-2xl mt-4 hover:bg-white hover:text-accent">
                GET FREE QUOTE
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative overflow-hidden ">
            <div className="image-div">
              <img className="" src={carousel2} alt="Slider1" />
            </div>
            <div className="swiper-inner-info ">
              <p className="my-4 text-white font-sans font-semibold md:text-5xl">
                We are active
              </p>

              <h1 className="md:text-7xl my-2 font-bold font-sans text-primary uppercase">
                TO ship you product trusted
              </h1>
              <button className="px-14 py-4 border-1 border-primary-focus text-white font-serif font-bold bg-accent rounded shadow-2xl mt-4 hover:bg-white hover:text-accent">
                GET FREE QUOTE
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative overflow-hidden ">
            <div className="image-div">
              <img className="" src={carousel3} alt="Slider1" />
            </div>
            <div className="swiper-inner-info ">
              <p className="my-4 text-white font-sans font-semibold md:text-5xl">
                We are proud
              </p>

              <h1 className="md:text-7xl my-2 font-bold font-sans text-primary ">
                TO BE ALWAYS ON DEMAND
              </h1>
              <button className="px-14 py-4 border-1 border-primary-focus text-white font-serif font-bold bg-accent rounded shadow-2xl mt-4 hover:bg-white hover:text-accent">
                GET FREE QUOTE
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HeroCarousel;
