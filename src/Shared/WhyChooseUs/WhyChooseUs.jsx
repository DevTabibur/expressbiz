import "./WhyChooseUs.css";
import WhyChooseUsPic from "../../Assets/images/why-choose-us.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faLockOpen,
  faThumbsUp,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";

const WhyChooseUs = () => {
  return (
    <>
      <div className="container mx-auto lg:px-40 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* first col */}
          <div className="first-col relative w-full p-4">
            <div className="w-full">
              <img
                className="w-full"
                src={WhyChooseUsPic}
                alt="why_choose_pic"
              />
            </div>
          </div>

          {/* second col */}
          <div className="second-col p-4">
            <h1 className="text-accent text-xl font-serif font-bold mb-4 border-b-4">
              WHY CHOOSE US
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
              ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
              consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum
              dolor sit amet, consectetur
            </p>
          </div>

          {/* third col */}
          <div className="third-col p-4 relative">
            <div class="vertical-outer relative">
              <div class="vertical-inner"></div>
            </div>

            <ul className="ml-6 absolute top-0">
              <li className="flex justify-center items-center my-4">
                <div className="rounded-icon">
                  <FontAwesomeIcon className="icon" icon={faHandshake} />
                </div>
                <div className="ml-4">
                  <h1 className="text-xl text-accent font-medium font-sans">
                    WE ARE TRUSTED
                  </h1>
                </div>
              </li>
              <li className="flex justify-center items-center my-4">
                <div className="rounded-icon">
                  <FontAwesomeIcon className="icon" icon={faLockOpen} />
                </div>
                <div className="ml-4">
                  <h1 className="text-xl text-accent font-medium font-sans">
                    BEST SECURITY
                  </h1>
                </div>
              </li>
              <li className="flex justify-center items-center my-4">
                <div className="rounded-icon">
                  <FontAwesomeIcon className="icon" icon={faThumbsUp} />
                </div>
                <div className="ml-4">
                  <h1 className="text-xl text-accent font-medium font-sans">
                    100% GUARANTEE
                  </h1>
                </div>
              </li>
              <li className="flex justify-center items-center my-4">
                <div className="rounded-icon">
                  <FontAwesomeIcon className="icon" icon={faLocation} />
                </div>
                <div className="ml-4">
                  <h1 className="text-xl text-accent font-medium font-sans">
                    QUICK LOCATION
                  </h1>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
