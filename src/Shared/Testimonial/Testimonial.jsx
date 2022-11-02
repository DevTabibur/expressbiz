import "./Testimonial.css";
import client1 from "../../Assets/carousel/client-1.jpg";
import client2 from "../../Assets/carousel/client-2.jpg";
import client3 from "../../Assets/carousel/client-3.jpg";
import client4 from "../../Assets/carousel/client-4.jpg";
import client5 from "../../Assets/carousel/client-5.jpg";
import client6 from "../../Assets/carousel/client-6.jpg";
import GreenShipping from "../../Assets/images/green-shipping-is-the-new-gold.tmb-1920x690.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCar,
  faPeopleGroup,
  faFile,
} from "@fortawesome/free-solid-svg-icons";


// demo for client review https://codepen.io/Supha/pen/OQvLEj
const Testimonial = () => {
  return (
    <>
      <div className="status py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="box shadow-lg">
              <div className="icon-div">
                <FontAwesomeIcon className="icon " icon={faFile} />
              </div>
              <div className="info">
                <h1 className="font-serif">2000+ Projects Done</h1>
              </div>
            </div>
            <div className="box shadow-lg">
              <div className="icon-div">
                <FontAwesomeIcon className="icon " icon={faPeopleGroup} />
              </div>
              <div className="info">
                <h1 className="font-serif">430+ Permanent Clients</h1>
              </div>
            </div>
            <div className="box shadow-lg">
              <div className="icon-div">
                <FontAwesomeIcon className="icon " icon={faCar} />
              </div>
              <div className="info">
                <h1 className="font-serif">56 Owned Vehicles</h1>
              </div>
            </div>
            <div className="box shadow-lg">
              <div className="icon-div">
                <FontAwesomeIcon className="icon " icon={faUser} />
              </div>
              <div className="info">
                <h1 className="font-serif">89 Support Member</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Clients */}
      <div className="container mx-auto px-4 py-24">
        <div class="separator">
          <div class="line"></div>
          <h2 className="text-3xl font-bold font-serif text-accent">Our Valuable Clients</h2>
          <div class="line"></div>
        </div>
        <div className="grid md:grid-cols-6 gap-6 py-12">
            <div className="relative w-full">
                <img className="w-full relative shadow-md rounded" src={client1} alt="client_Logo"/>
            </div>
            <div className="relative w-full">
                <img className="w-full relative shadow-md rounded" src={client2} alt="client_Logo"/>
            </div>
            <div className="relative w-full">
                <img className="w-full relative shadow-md rounded" src={client3} alt="client_Logo"/>
            </div>
            <div className="relative w-full">
                <img className="w-full relative shadow-md rounded" src={client4} alt="client_Logo"/>
            </div>
            <div className="relative w-full">
                <img className="w-full relative shadow-md rounded" src={client5} alt="client_Logo"/>
            </div>
            <div className="relative w-full">
                <img className="w-full relative shadow-md rounded" src={client6} alt="client_Logo"/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
