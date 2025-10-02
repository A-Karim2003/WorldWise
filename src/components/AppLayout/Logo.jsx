import style from "./AppLayout.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link to="/" className={style.logo}>
        <img src="/logo/logo.png" alt="LOGO" />
      </Link>
    </>
  );
}

export default Logo;
