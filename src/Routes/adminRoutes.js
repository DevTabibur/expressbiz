import AddServices from "../Pages/Dashboard/Admin Routes/AddServices";
import ClientReviews from "../Pages/Dashboard/Admin Routes/ClientReviews";
import ManageServices from "../Pages/Dashboard/Admin Routes/ManageServices";
import PaymentCollection from "../Pages/Dashboard/Admin Routes/PaymentCollection";
import Users from "../Pages/Dashboard/Admin Routes/Users";
import EditProfile from "../Pages/Profile/EditProfile";
import Profile from "../Pages/Profile/Profile";

export const adminRoutes = [
  { path: "/dashboard/profile", name: Profile, Component: Profile },
  {
    path: "/dashboard/edit-profile",
    name: EditProfile,
    Component: EditProfile,
  },
  { path: "users", name: Users, Component: Users },
  {
    path: "payment-collections",
    name: PaymentCollection,
    Component: PaymentCollection,
  },
  { path: "add-services", name: AddServices, Component: AddServices },
  { path: "manage-services", name: ManageServices, Component: ManageServices },
  { path: "client-review", name: ClientReviews, Component: ClientReviews },
];

export default adminRoutes;
