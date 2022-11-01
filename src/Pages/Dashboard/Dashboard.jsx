import { Outlet } from "react-router-dom";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <DashboardSidebar>
        <Outlet />
      </DashboardSidebar>
    </>
  );
};

export default Dashboard;
