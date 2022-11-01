import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = ({ children }) => {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-10 custom-bg">
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side border-collapse  h-auto">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-52 bg-accent rounded text-primary">
            {/* <!-- Sidebar content here --> */}

            <div className="collapse collapse-arrow bg-secondary">
              <input type="checkbox" className="peer" />
              <div className="collapse-title font-medium">Dashboard</div>
              <div className="collapse-content peer-checked:bg-accent">
                <li className="mt-0.5">
                  <NavLink to="/dashboard/admin">Admin</NavLink>
                </li>
                <li className="mt-0.5 ">
                  <NavLink to="/dashboard/users">Users</NavLink>
                </li>
                <li className="mt-0.5 ">
                  <NavLink to="/dashboard/bookings">Bookings</NavLink>
                </li>
                <li className="mt-0.5 ">
                  <NavLink to="/dashboard/upload-tuitions">
                    Post Tuitions
                  </NavLink>
                </li>
              </div>
            </div>
            {/* not admin */}
            <>
              <li className="bg-secondary  ">
                <NavLink to="/dashboard/tuitions">Tuitions</NavLink>
              </li>
              <li className="bg-secondary mt-0.5">
                <NavLink to="/dashboard/library">Library</NavLink>
              </li>

              <li className="bg-secondary mt-0.5">
                <NavLink to="/dashboard/account">Account</NavLink>
              </li>

              <li className="bg-secondary mt-0.5">
                <NavLink to="/dashboard/subjects">Subjects</NavLink>
              </li>
              <li className="bg-secondary mt-0.5">
                <NavLink to="/dashboard/attendance">Attendance</NavLink>
              </li>
              <li className="bg-secondary mt-0.5">
                <NavLink to="/dashboard/exam">Exam</NavLink>
              </li>
              <li className="bg-secondary mt-0.5">
                <NavLink to="/dashboard/messenger">Messenger</NavLink>
              </li>
            </>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
