import { lazy, Suspense } from "react";

import { Routes, Route, useLocation, Navigate } from "react-router-dom";

/*===============Pages===============*/
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

/*==============Components============*/
import AppLayout from "./components/AppLayout/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import CityCard from "./components/CityCard";

/*==============Components============*/
import CitiesProvider from "./context/CitiesProvider";
import TripForm from "./pages/WorldWise/TripForm";
import UpdateNotesForm from "./pages/WorldWise/UpdateNotesForm";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoutes from "./pages/ProtectedRoutes";

/*===============Lazy loaded Components===============*/
const WorldWise = lazy(() => import("./pages/WorldWise/worldwise"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const Product = lazy(() => import("./pages/Product/Product"));

/*============Routes to BG Map========*/
const routeToBgMap = {
  "/": "homepageBg",
  "/pricing": "pricingBg",
  "/product": "productBg",
  "/login": "loginBg",
};

/* Original Build:
  dist/index.html                   0.78 kB │ gzip:   0.47 kB
  dist/assets/icon-C76IL8ru.png    20.20 kB
  dist/assets/index-BBMP8nf6.css   32.07 kB │ gzip:   5.37 kB
  dist/assets/index-1T7EX1Fc.js   670.78 kB │ gzip: 199.58 kB

  New Build:
  dist/index.html                      0.78 kB │ gzip:   0.46 kB
  dist/assets/icon-C76IL8ru.png       20.20 kB
  dist/assets/index-BhdhmsBS.css      32.07 kB │ gzip:   5.36 kB
  dist/assets/WorldWise-teLISQH2.js  157.35 kB │ gzip:  46.31 kB
  dist/assets/index-GRiOttaP.js      513.36 kB │ gzip: 153.31 kB
*/
function App() {
  const location = useLocation();
  const bgClass = routeToBgMap[location.pathname] || "default";

  return (
    <div className={`app ${bgClass}`}>
      <AuthProvider>
        <CitiesProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/product" element={<Product />} />
            </Route>
            <Route
              path="/worldwise"
              element={
                <ProtectedRoutes>
                  <Suspense fallback={<h1>LOADING!!!!!</h1>}>
                    <WorldWise />
                  </Suspense>
                </ProtectedRoutes>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />

              <Route path="cities" element={<CityList />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="cities/:id" element={<CityCard />} />

              <Route path="UpdateNotesForm/:id" element={<UpdateNotesForm />} />
              <Route path="form" element={<TripForm />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CitiesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
