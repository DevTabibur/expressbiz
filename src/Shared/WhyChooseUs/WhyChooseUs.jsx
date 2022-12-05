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
          <div className="first-col relative ">
            <div className="w-full">
              <img
                className="w-full rounded shadow-2xl"
                src={WhyChooseUsPic}
                alt="why_choose_pic"
              />
            </div>
          </div>

          {/* second col */}
          <div className="second-col p-4">
            <h1 className="text-accent text-xl  font-bold mb-4 border-b-4">
              WHY CHOOSE US
            </h1>
            <p>
              We are providing the best quality and standard services of freight
              shipping and courier. We took care our clients and customers as a
              part of our company.
            </p>
            <br></br>
            <p>
              The best product courier services ever in Bangladesh. 100%
              guarantee with best client satisfactions. Customer also can see
              their product live location.
            </p>
          </div>

          {/* third col */}
          <div className="third-col p-4 relative md:mt-8">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-accent ">
                  WE ARE TRUSTED
                </h3>
              </li>
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold  text-accent">
                  THE BEST SECURITY
                </h3>
              </li>
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold  text-accent">
                  100% GUARANTEE
                </h3>
              </li>
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-accent">
                  QUICK LOCATION
                </h3>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
