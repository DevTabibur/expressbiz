import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = ({ children }) => {
  const admin = true;
  const menu = (
    <>
      {/* user route */}
      {/* {!admin && ( */}
        <>
          <li className="text-accent my-1 font-semibold font-sans">
            <NavLink to="/dashboard/quotation-list">Quotation List</NavLink>
          </li>
          <li className="text-accent my-1 font-semibold font-sans">
            <NavLink to="/dashboard/review">Review</NavLink>
          </li>
          <li className="text-accent my-1 font-semibold font-sans">
            <NavLink to="/dashboard/checkout">Checkout</NavLink>
          </li>
          <li className="text-accent my-1 font-semibold font-sans">
            <NavLink to="/dashboard/payment-history">Payment History</NavLink>
          </li>
        </>
      {/* )} */}

      {/* admin route */}
      {admin && (
        <>
          <li className="text-accent my-1 font-semibold font-sans">
            <NavLink to="/dashboard/users">Users</NavLink>
          </li>
          <li className="text-accent my-1 font-semibold font-sans">
            <NavLink to="/dashboard/add-services">Add Services</NavLink>
          </li>
          <li className="text-accent my-1 font-semibold font-sans">
            <NavLink to="/dashboard/manage-services">Manage Services</NavLink>
          </li>
          <li className="text-accent my-1 font-semibold font-sans">
            <NavLink to="/dashboard/client-review">Client Review</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  p-12">
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-neutral-focus">
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
