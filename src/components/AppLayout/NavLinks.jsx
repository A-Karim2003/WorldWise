import style from "./AppLayout.module.css";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function NavLinks() {
  return (
    <nav>
      <NavLink className={style.navLink} to="/pricing">
        Pricing
      </NavLink>
      <NavLink className={style.navLink} to="/product">
        Product
      </NavLink>
      <NavLink className={`${style.navLink} `} to="/login">
        <Button>Login</Button>
      </NavLink>
    </nav>
  );
}

export default NavLinks;
