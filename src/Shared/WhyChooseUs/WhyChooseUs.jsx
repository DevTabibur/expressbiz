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
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  WE ARE TRUSTED
                </h3>
              </li>
              <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  THE BEST SECURITY
                </h3>
              </li>
              <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  100% GUARANTEE
                </h3>
              </li>
              <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  QUICK LOCATION
                </h3>
              </li>
            </ol>

            {/* <div class="vertical-outer relative">
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
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
