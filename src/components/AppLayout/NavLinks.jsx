import style from "./AppLayout.module.css";
import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <nav>
      <Link className={style.navLink} to="/">
        Home{" "}
      </Link>
      <Link className={style.navLink} to="/pricing">
        Pricing{" "}
      </Link>
      <Link className={style.navLink} to="/login">
        Login{" "}
      </Link>
      <Link className={style.navLink} to="/product">
        Product{" "}
      </Link>
    </nav>
  );
}

export default NavLinks;
