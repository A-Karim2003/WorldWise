import styles from "./cityList.module.css";
import City from "./City";
import { useContext, useState } from "react";
import { CitiesContext } from "../context/CitiesProvider";

function CityList() {
  const cities = useContext(CitiesContext).cities;
  if (!cities.length) return <div></div>;

  const [activeCity, setActiveCity] = useState();

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <City city={city} key={city.id} />;
      })}
    </ul>
  );
}

export default CityList;
