import React from "react";
import { NavLink } from "react-router-dom";
import useActiveUser from "../../Hooks/useActiveUser";
import useAdmin from "../../Hooks/useAdmin";
import Loader from "../../Shared/Loader/Loader";
import "./DashboardSideBar.css";

const DashboardSidebar = ({ children }) => {
  const [activeUser, isLoading] = useActiveUser();

  // const [admin, adminLoading] = useAdmin(activeUser);

  // console.log("dashboard side bar admin", admin);
  // console.log("dashboard side activeUser", activeUser);
  const admin = true;

  const menu = (
    <>
      {/* user route */}
      {!admin && (
        <>
          <li className="text-white my-1">
            <NavLink to="/dashboard/profile">Profile</NavLink>
          </li>
          <li className="text-white my-1">
            <NavLink to="/dashboard/review">Give Your Feedback</NavLink>
          </li>

          <li className="text-white my-1">
            <NavLink to="/dashboard/shipment-history">Shipment History</NavLink>
          </li>
        </>
      )}

      {/* admin route */}
      {admin && (
        <>
          <li className="text-white my-1">
            <NavLink to="/dashboard/profile">Profile</NavLink>
          </li>
          <li className="text-white my-1">
            <NavLink to="/dashboard/users">Users</NavLink>
          </li>
          <li className="text-white my-1">
            <NavLink to="/dashboard/add-services">Add Services</NavLink>
          </li>
          <li className="text-white my-1">
            <NavLink to="/dashboard/manage-services">Manage Services</NavLink>
          </li>
          <li className="text-white my-1">
            <NavLink to="/dashboard/client-review">Client Review</NavLink>
          </li>
        </>
      )}
    </>
  );

  // for loader
  // if (adminLoading || isLoading) {
  //   return <Loader />;
  // }
  return (
    <>
      <>
        <div className="drawer drawer-mobile custom-css">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content p-6  bg-success">
            {/* <!-- Page content here --> */}
            {children}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-info">
              {/* <!-- Sidebar content here --> */}
              {menu}
            </ul>
          </div>
        </div>
      </>
    </>
  );
};

export default DashboardSidebar;
