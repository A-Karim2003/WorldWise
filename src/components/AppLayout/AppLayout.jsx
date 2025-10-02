import { Outlet } from "react-router-dom";
import style from "./appLayout.module.css";
import { FontAwesomeIcon as HambugerIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

/*===============Components===============*/
import Sidebar from "./Sidebar";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function AppLayout() {
  // For sidebar
  const [isOpen, setIsOpen] = useState(false);

  function handleSidebar() {
    setIsOpen((open) => !open);
  }
  return (
    <>
      <header>
        <Logo />
        <NavLinks />
        <HambugerIcon
          onClick={setIsOpen}
          icon={faBars}
          className={style.hamburger}
        />
      </header>

      <Sidebar isOpen={isOpen} onHandleSidebar={handleSidebar} />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
