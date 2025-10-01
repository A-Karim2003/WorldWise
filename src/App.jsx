import { Routes, Route } from "react-router-dom";

/*===============Pages===============*/
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Pricing from "./pages/Pricing/Pricing";
import Product from "./pages/Product/Product";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

/*===============Components===============*/
import AppLayout from "./components/AppLayout/AppLayout";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
