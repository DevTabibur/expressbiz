// demo ::   https://preview.themeforest.net/item/wshipping-html5-responsive-the-shipping-cargo-logistics-multipurpose-template/full_screen_preview/20715901?_ga=2.132191118.1615462935.1667055317-1240890369.1657795515

import Home from "./Pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import HeaderTop from "./Shared/Header/HeaderTop";
import Services from "./Pages/Services/Services";
import Process from "./Pages/Process/Process";
import Footer from "./Shared/Footer/Footer";
import HeaderNav from "./Shared/Header/HeaderNav";
import Dashboard from "./Pages/Dashboard/Dashboard";
import About from "./Pages/About/About";
import Tracking from "./Pages/Tracking/Tracking";
import Shipping from "./Pages/Shipping/Shipping";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import SingleService from "./Pages/Services/SingleService";
import Register from "./Pages/Register/Register";
import CreateShipment from "./Pages/CreatShipment/CreateShipment";
import { createContext } from "react";
import RequireUser from "./Authentication/RequireUser";
import QuotationList from "./Pages/User Routes/QuotationList";
import Users from "./Pages/Admin Routes/Users";
import AddServices from "./Pages/Admin Routes/AddServices";
import ManageServices from "./Pages/Admin Routes/ManageServices";
import ClientReviews from "./Pages/Admin Routes/ClientReviews";
import GiveReview from "./Pages/User Routes/GiveReview";
import ShipmentHistory from "./Pages/User Routes/ShipmentHistory";
import Payment from "./Pages/User Routes/Payment";

export const BlogContext = createContext();

function App() {
  return (
    <>
      <HeaderTop />
      <HeaderNav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route element={<RequireUser />}>
            <Route path="/dashboard" element={<Dashboard />}>
              {/* nested route */}
              {/* by default Order component will render */}
              <Route index element={<QuotationList />} />
              <Route path="users" element={<Users />} />
              <Route path="add-services" element={<AddServices />} />
              <Route path="manage-services" element={<ManageServices />} />
              <Route path="client-review" element={<ClientReviews />} />
              {/* user routes */}
              <Route path="review" element={<GiveReview />} />
              <Route path="shipment-history" element={<ShipmentHistory />} />
              <Route path="payment/:id" element={<Payment />} />
              <Route path="quotation-history" element={<QuotationList />} />
            </Route>
          </Route>
          <Route path="/about-us" element={<About />} />
          <Route
            path="/tracking"
            element={
              <RequireUser>
                <Tracking />
              </RequireUser>
            }
          />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/create-shipment" element={<CreateShipment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<SingleService />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </HeaderNav>

      {/* <Footer /> */}
    </>
  );
}

export default App;
