/*===============Components===============*/
import NavLinks from "./NavLinks";
import style from "./appLayout.module.css";
import { FontAwesomeIcon as CloseIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ isOpen, onHandleSidebar }) {
  return (
    <aside className={isOpen ? style.active : ""}>
      <CloseIcon
        onClick={onHandleSidebar}
        icon={faXmark}
        className={style.closeIcon}
      />
      <NavLinks />
    </aside>
  );
}

export default Sidebar;
