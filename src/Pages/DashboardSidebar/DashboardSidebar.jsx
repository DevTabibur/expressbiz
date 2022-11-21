import React from "react";
import { NavLink } from "react-router-dom";
import useActiveUser from "../../Hooks/useActiveUser";
import useAdmin from "../../Hooks/useAdmin";
import Loader from "../../Shared/Loader/Loader";

const DashboardSidebar = ({ children }) => {
  const [activeUser, activeUserData, isLoading] = useActiveUser();

  console.log('dashboard activeUserData', activeUserData)
  console.log('dashboard isLoading', activeUserData)

  const [admin, adminLoading] = useAdmin(activeUserData);

  console.log('dashboard side bar admin', admin)

  const menu = (
    <>
      {/* user route */}
      {!admin && (
        <>
          <li className="text-white my-1 font-semibold font-sans">
            <NavLink to="/dashboard/quotation-history">
              Quotation history
            </NavLink>
          </li>
          <li className="text-white my-1 font-semibold font-sans">
            <NavLink to="/dashboard/review">Give Your Feedback</NavLink>
          </li>

          <li className="text-white my-1 font-semibold font-sans">
            <NavLink to="/dashboard/shipment-history">Shipment History</NavLink>
          </li>
        </>
      )}

      {/* admin route */}
      {admin && (
        <>
          <li className="text-white my-1 font-semibold font-sans">
            <NavLink to="/dashboard/users">Users</NavLink>
          </li>
          <li className="text-white my-1 font-semibold font-sans">
            <NavLink to="/dashboard/add-services">Add Services</NavLink>
          </li>
          <li className="text-white my-1 font-semibold font-sans">
            <NavLink to="/dashboard/manage-services">Manage Services</NavLink>
          </li>
          <li className="text-white my-1 font-semibold font-sans">
            <NavLink to="/dashboard/client-review">Client Review</NavLink>
          </li>
        </>
      )}
    </>
  );

  // for loader
  // if (adminLoading) {
  //   return <Loader />;
  // }
  return (
    <>
      <>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content  p-12 bg-success">
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
