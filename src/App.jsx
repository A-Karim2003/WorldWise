import { Routes, Route, useLocation } from "react-router-dom";

/*===============Pages===============*/
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Pricing from "./pages/Pricing/Pricing";
import Product from "./pages/Product/Product";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import WorldWise from "./pages/WorldWise/worldwise";
/*==============Components============*/
import AppLayout from "./components/AppLayout/AppLayout";

/*============Routes to BG Map========*/
const routeToBgMap = {
  "/": "homepageBg",
  "/pricing": "pricingBg",
  "/product": "productBg",
  "/login": "loginBg",
};

function App() {
  const location = useLocation();
  const bgClass = routeToBgMap[location.pathname] || "default";

  return (
    <div className={`app ${bgClass}`}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
        </Route>
        <Route path="/worldwise" element={<WorldWise />}></Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
