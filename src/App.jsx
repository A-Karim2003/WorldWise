import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";

function App() {
  return (
    <div className="app">
      {/* Declare links to pages*/}
      <Link to="home">Home</Link>
      <Link to="Pricing">Pricing</Link>
      <Link to="home">Home</Link>

      {/* Declare the routes */}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
