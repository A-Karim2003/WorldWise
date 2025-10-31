import styles from "./cityList.module.css";
import City from "./City";
import { useContext } from "react";
import { CitiesContext } from "../context/CitiesProvider";
import Spinner from "./Spinner";

function CityList() {
  const { cities, status: contextStatus } = useContext(CitiesContext);

  if (contextStatus === "loading") return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <City city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
