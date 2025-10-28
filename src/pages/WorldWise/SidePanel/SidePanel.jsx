import styles from "../WorldWise.module.css";

import Logo from "../../../components/AppLayout/Logo";
import Button from "../../../components/AppLayout/Button";

import { Link, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { CitiesContext } from "../../../context/CitiesProvider";
import useUrlPosition from "../../../hooks/useUrlPosition";

function SidePanel() {
  const [toggleBtn, setToggleBtn] = useState("cities");
  const length = useContext(CitiesContext).cities.length;
  const { lat, lng } = useUrlPosition();

  return (
    <div className={styles.sidepanel}>
      <header>
        <Logo />
      </header>
      <div className={styles.locationFilter}>
        <Link to="cities" onClick={() => setToggleBtn("cities")}>
          <Button className={toggleBtn === "cities" ? styles.toggled : ""}>
            CITIES
          </Button>
        </Link>
        <Link to="countries" onClick={() => setToggleBtn("countries")}>
          <Button className={toggleBtn === "countries" ? styles.toggled : ""}>
            COUNTRIES
          </Button>
        </Link>
      </div>
      <div>
        {!length && !lat && !lng ? (
          <h2 className={styles.message}>
            👋 Add your first city by clicking on a city on the map
          </h2>
        ) : (
          ""
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default SidePanel;
