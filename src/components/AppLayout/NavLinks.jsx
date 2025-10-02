import style from "./AppLayout.module.css";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <nav>
      <NavLink className={style.navLink} to="/pricing">
        Pricing
      </NavLink>
      <NavLink className={style.navLink} to="/product">
        Product
      </NavLink>
      <NavLink className={`${style.navLink} ${style.navBtn}`} to="/login">
        Login
      </NavLink>
    </nav>
  );
}

export default NavLinks;
