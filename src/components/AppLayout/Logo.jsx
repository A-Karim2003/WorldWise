import style from "./AppLayout.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link className={style.logo}>
        <img src="/public/logo/logo.png" alt="" />
      </Link>
    </>
  );
}

export default Logo;
