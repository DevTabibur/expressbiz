import "./Footer.css";
import Logo from "../../Assets/Logos/EXPRESS.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMailBulk,
  faFax,
  faLocationArrow,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="footer" className=" bg-secondary pt-24 pb-12">
        <div className="inner-footer">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-4">
              {/* first column */}
              <div className="first">
                <img src={Logo} alt="Logo" />
                <p className="my-4 text-md font-sans">
                  It was abc abc abc acb abc abc abc acbabc abc abc acb abc abc
                  abc acb It was abc abc abc acb abc abc abc acbabc abc abc acb
                  abc abc abc acb It was abc abc abc acb abc abc abc acbabc abc
                  abc acb abc abc abc acb
                </p>
                <ul className="footer-links">
                  <li className="my-3 font-sans">
                    <a href="tel:+01307588223">
                      <FontAwesomeIcon className="mr-4" icon={faPhone} />
                      +01307588223
                    </a>
                  </li>
                  <li className="my-3">
                    <a href="mailto:info@companyName.com">
                      <FontAwesomeIcon className="mr-4" icon={faMailBulk} />
                      info@companyName.com
                    </a>
                  </li>
                  <li className="my-3">
                    <FontAwesomeIcon className="mr-4" icon={faLocationArrow} />
                    Brisbane, Australia
                  </li>
                </ul>

                {/* <div className="social">
                <a href="#"></a>
              </div> */}
              </div>

              {/* second column */}
              <div>
                <h1 className="text-3xl font-bold font-sans mb-4">
                  QUICK LINKS
                </h1>
                <ul className="footer-links">
                  <li className="font-sans font-medium my-3">
                    <Link to="/">
                      {" "}
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faArrowAltCircleRight}
                      />
                      Company Overview
                    </Link>
                  </li>
                  <li className="font-sans font-medium my-3">
                    <Link to="/services">
                      {" "}
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faArrowAltCircleRight}
                      />
                      Our services
                    </Link>
                  </li>
                  <li className="font-sans font-medium my-3">
                    <Link to="/">
                      {" "}
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faArrowAltCircleRight}
                      />
                      Media & Publications
                    </Link>
                  </li>
                  <li className="font-sans font-medium my-3">
                    <Link to="/">
                      {" "}
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faArrowAltCircleRight}
                      />
                      Blog
                    </Link>
                  </li>
                  <li className="font-sans font-medium my-3">
                    <Link to="/contact-us">
                      {" "}
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faArrowAltCircleRight}
                      />
                      Contact us
                    </Link>
                  </li>
                  <li className="font-sans font-medium my-3">
                    <Link to="/">
                      {" "}
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faArrowAltCircleRight}
                      />
                      Freight Gallery
                    </Link>
                  </li>
                  <li className="font-sans font-medium my-3">
                    <Link to="/">
                      {" "}
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faArrowAltCircleRight}
                      />
                      Image Gallery
                    </Link>
                  </li>
                </ul>
              </div>

              {/* third column */}
              <div>
                <h1 className="text-3xl font-bold font-sans mb-4">
                  USEFUL LINKS
                </h1>
                <ul className="footer-links">
                  <li className="font-sans font-medium my-3">
                    <Link to="/">
                      {" "}
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faArrowAltCircleRight}
                      />
                      Create Shipping
                    </Link>
                  </li>
                  <li className="font-sans font-medium my-3">
                    <Link to="/">
                      {" "}
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faArrowAltCircleRight}
                      />
                      Tracking
                    </Link>
                  </li>
                  <li className="font-sans font-medium my-3">
                    <Link to="/">
                      {" "}
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faArrowAltCircleRight}
                      />
                      Shipment History
                    </Link>
                  </li>
                  <li className="font-sans font-medium my-3">
                    <Link to="/">
                      {" "}
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faArrowAltCircleRight}
                      />
                      Typography
                    </Link>
                  </li>
                  <li className="font-sans font-medium my-3">
                    <Link to="/contact-us">
                      {" "}
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faArrowAltCircleRight}
                      />
                      Button Accordion
                    </Link>
                  </li>
                  <li className="font-sans font-medium my-3">
                    <Link to="/">
                      {" "}
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faArrowAltCircleRight}
                      />
                      Tracking Result
                    </Link>
                  </li>
                  <li className="font-sans font-medium my-3">
                    <Link to="/">
                      {" "}
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faArrowAltCircleRight}
                      />
                      Product Warehouse
                    </Link>
                  </li>
                </ul>
              </div>

              {/* fourth column */}
              <div>
                <h1 className="text-3xl font-bold font-sans mb-4">
                  OPENING HOURS
                </h1>
                <ul className="footer-links">
                  <li className="font-sans font-medium my-3">
                    Mon to Fri: 09:00 AM - 09:00 PM
                  </li>
                  <li className="font-sans font-medium my-3">Sun: Closed</li>
                </ul>
              </div>
            </div>
            <p className="font-sans font-bold text-center  mt-6">
              COPYRIGHT@2022 ALL RIGHT RESERVED BY DEVELOPER TABIBUR RAHMAN
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
