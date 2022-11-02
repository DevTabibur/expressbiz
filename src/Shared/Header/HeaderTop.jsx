import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const HeaderTop = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div
        style={
          pathname.includes("/login")
            ? { display: "none" }
            : { display: "flex" }
        }
        className="headerTop"
      >
        <div className="container mx-auto px-4">
          <div className="md:flex flex-row gap-4">
            <div className="basis-2/3">
              <div className="md:flex">
                <p className="md:mr-6">
                  <FontAwesomeIcon
                    className="mr-2 text-primary"
                    icon={faEnvelope}
                  />
                  gazi@expressbiz.com.au
                </p>
                <p className="md:mr-6">
                  <FontAwesomeIcon
                    className="mr-2 text-primary"
                    icon={faPhone}
                  />
                  +61 457 119 709
                </p>
                <p className="md:mr-6">
                  <FontAwesomeIcon
                    className="mr-2 text-primary"
                    icon={faTimes}
                  />
                  05:00 am - 05:00 pm
                </p>
              </div>
            </div>
            <div className="basis-1/3">
              <span className="md:mr-6">Login</span>
              <span className="md:mr-6">Registration</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
