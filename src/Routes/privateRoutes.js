import Dashboard from "../Pages/Dashboard/Dashboard";
import GiveReview from "../Pages/Dashboard/User Routes/GiveReview";
import Payment from "../Pages/Dashboard/User Routes/Payment";
import QuotationList from "../Pages/Dashboard/User Routes/QuotationList";
import ShipmentHistory from "../Pages/Dashboard/User Routes/ShipmentHistory";
import EditProfile from "../Pages/Profile/EditProfile";
import Profile from "../Pages/Profile/Profile";

export const privateRoutes = [
  { path: "/dashboard/profile", name: Profile, Component: Profile },
  {
    path: "/dashboard/edit-profile",
    name: EditProfile,
    Component: EditProfile,
  },
  { path: "/dashboard/review", name: GiveReview, Component: GiveReview },
  {
    path: "/dashboard/shipment-history",
    name: ShipmentHistory,
    Component: ShipmentHistory,
  },
  { path: "/dashboard/payment/:id", name: Payment, Component: Payment },
  
];

export default privateRoutes;
