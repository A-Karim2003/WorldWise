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
import FullPageSpinner from "./components/FullPageSpinner";

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
              <Route
                path="/pricing"
                element={
                  <Suspense fallback={<FullPageSpinner />}>
                    <Pricing />
                  </Suspense>
                }
              />
              <Route
                path="/product"
                element={
                  <Suspense fallback={<FullPageSpinner />}>
                    <Product />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="/worldwise"
              element={
                <ProtectedRoutes>
                  <Suspense fallback={<FullPageSpinner />}>
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
