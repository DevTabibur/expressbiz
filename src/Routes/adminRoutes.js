import AddServices from "../Pages/Dashboard/Admin Routes/AddServices";
import ClientReviews from "../Pages/Dashboard/Admin Routes/ClientReviews";
import ManageServices from "../Pages/Dashboard/Admin Routes/ManageServices";
import Users from "../Pages/Dashboard/Admin Routes/Users";

export const adminRoutes = [
  { path: "users", name: Users, Component: Users },
  { path: "add-services", name: AddServices, Component: AddServices },
  { path: "manage-services", name: ManageServices, Component: ManageServices },
  { path: "client-review", name: ClientReviews, Component: ClientReviews }
]

export default adminRoutes;