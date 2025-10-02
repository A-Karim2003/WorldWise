import { Outlet, Link } from "react-router-dom";
import style from "./appLayout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

/*===============Components===============*/
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function AppLayout() {
  <div className={style.sidebar}></div>;

  return (
    <>
      <header>
        <Logo />
        <NavLinks />
        <FontAwesomeIcon icon={faBars} className={style.hamburger} />
      </header>

      <Sidebar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
