import Dashboard from "../Pages/Dashboard/Dashboard";
import GiveReview from "../Pages/Dashboard/User Routes/GiveReview";
import Payment from "../Pages/Dashboard/User Routes/Payment";
import QuotationList from "../Pages/Dashboard/User Routes/QuotationList";
import ShipmentHistory from "../Pages/Dashboard/User Routes/ShipmentHistory";

export const privateRoutes = [
  { path: "/dashboard/review", name: GiveReview, Component: GiveReview },
  {
    path: "/dashboard/shipment-history",
    name: ShipmentHistory,
    Component: ShipmentHistory,
  },
  { path: "/dashboard/payment/:id", name: Payment, Component: Payment },
  {
    path: "/dashboard//quotation-history",
    name: QuotationList,
    Component: QuotationList,
  },
];

export default privateRoutes;
