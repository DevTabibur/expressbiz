import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import useActiveUser from "../../Hooks/useActiveUser";
import Swal from "sweetalert2";

const HeaderTop = () => {
  const { pathname } = useLocation();
  const [user] = useActiveUser();
  // console.log("user on headerTop", user);
  // const user = true;

  const logOut = () => {
    const getIdLocally = localStorage.getItem("user_id");
    const id = JSON.parse(getIdLocally);
    if (id) {
      const url = `http://localhost:5000/register/${id}`;
      fetch(url, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ user: false }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data log out", data);
          localStorage.removeItem("user_id");
          Swal.fire({
            title: "Log Out Successfully",
            icon: "success",
          });
          window.location.reload();
        });
    }
  };
  return (
    <>
      <div
        // style={
        //   pathname.includes("/login")
        //     ? { display: "none" }
        //     : { display: "flex" }
        // }
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
              {user ? (
                <button onClick={logOut} className="md:mr-6">
                  Logout
                </button>
              ) : (
                <Link to="/login" className="md:mr-6">
                  Login
                </Link>
              )}

              <Link to="/register" className="md:mr-6">
                Registration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
