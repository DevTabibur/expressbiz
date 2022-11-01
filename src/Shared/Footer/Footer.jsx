import "./Footer.css";
import Logo from "../../Assets/Logos/EXPRESS.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div className="">
        <div className="container mx-auto px-4 py-6">
          <div className="grid md:grid-cols-4 gap-4">
            {/* first column */}
            <div>
              <img src={Logo} alt="Logo" />
              <p className="my-4">It was hsdbshdf sdnsbdsbd s dnsbdjsd</p>
              <ul>
                <li>+01307588223</li>
                <li>info@companyName.com</li>
                <li>Brisbane, Australia</li>
              </ul>

              <div class="social">
                <a href="#">
                  <FontAwesomeIcon/>
                </a>
                <a href="#">
                <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            {/* second column */}
            <div>
                <h1 className="text-3xl font-bold font-serif">QUICK LINKS</h1>
                <ul className="footer-links">
                    <li>Company Overview</li>
                    <li>Our services</li>
                    <li>Media & Publications</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                    <li>Freight Gallery</li>
                    <li>Image Gallery</li>
                </ul>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
