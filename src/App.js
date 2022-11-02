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
function App() {
  return (
    <>
      <HeaderTop />
      <HeaderNav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<SingleService />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          {/* dashboard routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            {/* <Route path="test1" element={<Footer />} /> */}
          </Route>
        </Routes>
      </HeaderNav>

      {/* <Footer /> */}
    </>
  );
}

export default App;
