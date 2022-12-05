import { withTheme } from "@emotion/react";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../Assets/Logos/EXPRESS.webp";
import useActiveUser from "../../Hooks/useActiveUser";

const HeaderNav = ({ children }) => {
  const { pathname } = useLocation();
  const [activeUser, activeUserData] = useActiveUser();

  let activeStyle = {
    textDecoration: "underline",
    color: "#1c166473",
    transition: ".4s",
  };

  const menu = (
    <>
      <NavLink
        className="m-4  text-accent font-semibold"
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        className="m-4   text-accent font-semibold  "
        to="/services"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Services
      </NavLink>
      <NavLink
        className="m-4   text-accent font-semibold  "
        to="/tracking"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Tracking
      </NavLink>
      <NavLink
        className="m-4   text-accent font-semibold  "
        to="/shipping"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Shipping
      </NavLink>

      <NavLink
        className="m-4   text-accent font-semibold  "
        to="/contact-us"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Contact us
      </NavLink>

      {activeUser && (
        <NavLink
          className="m-4   text-accent font-semibold  "
          to="/dashboard"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Dashboard
        </NavLink>
      )}
    </>
  );

  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}

          <div
            className="w-full navbar bg-white shadow-lg"
            style={
              pathname.includes(`/login`)
                ? { display: "none" }
                : { display: "flex" }
            }
          >
            <div className="container mx-auto px-4">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>

              <div className="navbar-start">
                <div className="flex-1 relative w-48">
                  <Link to="/">
                    <img className="w-full relative" src={Logo} alt="logo" />
                  </Link>
                </div>
              </div>

              <div className="navbar-center">
                <div className=" flex-none hidden lg:block">
                  <ul className="menu menu-horizontal">
                    {/* <!-- Navbar menu content here --> */}
                    {menu}
                  </ul>
                </div>
              </div>

              <div className="navbar-end text-end">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            {menu}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
