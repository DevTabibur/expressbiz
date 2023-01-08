// demo ::   https://preview.themeforest.net/item/wshipping-html5-responsive-the-shipping-cargo-logistics-multipurpose-template/full_screen_preview/20715901?_ga=2.132191118.1615462935.1667055317-1240890369.1657795515

import { Routes, Route, Link } from "react-router-dom";
import Footer from "./Shared/Footer/Footer";
import HeaderNav from "./Shared/Header/HeaderNav";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Tracking from "./Pages/Tracking/Tracking";
import { createContext } from "react";
import RequireUser from "./Authentication/RequireUser";
import publicRoutes from "./Routes/publicRoutes";
import privateRoutes from "./Routes/privateRoutes";
import RequireAdmin from "./Authentication/RequireAdmin";
import adminRoutes from "./Routes/adminRoutes";
import Shipping from "./Pages/Shipping/Shipping";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <>
      <HeaderNav>
        <Routes>
          {/* public routes */}
          {publicRoutes.map(({ path, name, Component }, idx) => (
            <Route key={idx} path={path} element={<Component />} />
          ))}

          {/* user route */}
          <Route element={<RequireUser></RequireUser>}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Profile />} />
              {privateRoutes.map(({ path, name, Component }, idx) => (
                <Route key={idx} path={path} element={<Component />} />
              ))}
            </Route>
          </Route>

          {/* Admin Route */}
          <Route element={<RequireAdmin />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Profile />} />
              {/* nested route */}
              {adminRoutes.map(({ path, name, Component }, idx) => (
                <Route key={idx} path={path} element={<Component />} />
              ))}
            </Route>
          </Route>

          {/* extra routes */}
          <Route element={<RequireUser></RequireUser>}>
            <Route path="/tracking" element={<Tracking />} />
          </Route>
        </Routes>
      </HeaderNav>
    </>
  );
}

export default App;
