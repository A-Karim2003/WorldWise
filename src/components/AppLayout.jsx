import { Outlet, Link } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <header>
        <div className="logo"></div>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/pricing">Pricing </Link>
          <Link to="/login">Login </Link>
          <Link to="/product">Product </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
