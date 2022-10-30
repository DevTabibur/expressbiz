// demo ::   https://preview.themeforest.net/item/wshipping-html5-responsive-the-shipping-cargo-logistics-multipurpose-template/full_screen_preview/20715901?_ga=2.132191118.1615462935.1667055317-1240890369.1657795515

import Home from "./Pages/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import HeaderTop from "./Shared/Header/HeaderTop";
import Services from "./Pages/Services/Services";
function App() {
  return (
    <>
    <HeaderTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
