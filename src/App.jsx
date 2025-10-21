import { Routes, Route, useLocation, Navigate } from "react-router-dom";

/*===============Pages===============*/
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Pricing from "./pages/Pricing/Pricing";
import Product from "./pages/Product/Product";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import WorldWise from "./pages/WorldWise/worldwise";
/*==============Components============*/
import AppLayout from "./components/AppLayout/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import CityCard from "./components/CityCard";

/*==============Components============*/
import CitiesProvider, { CitiesContext } from "./context/CitiesProvider";
import TripForm from "./pages/WorldWise/TripForm";

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
      <CitiesProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/product" element={<Product />} />
          </Route>
          <Route path="/worldwise" element={<WorldWise />}>
            <Route index element={<Navigate replace to="cities" />} />

            <Route path="cities" element={<CityList />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="cities/:id" element={<CityCard />} />

            <Route path="form" element={<TripForm />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CitiesProvider>
    </div>
  );
}

export default App;
