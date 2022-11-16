import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import Shipping from "../Pages/Shipping/Shipping";

export const publicRoutes = [
  { path: "/", name: Home, Component: Home },
  { path: "/home", name: Home, Component: Home },
  { path: "/services", name: Services, Component: Services },
  { path: "/shipping", name: Shipping, Component: Shipping },
  { path: "/contact-us", name: Contact, Component: Contact },
  { path: "/login", name: Login, Component: Login },
  { path: "/register", name: Register, Component: Register },
  { path: "*", name: NotFound, Component: NotFound },
];

export default publicRoutes;
