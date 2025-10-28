import styles from "./cityList.module.css";
import City from "./City";
import { useContext } from "react";
import { CitiesContext } from "../context/CitiesProvider";

function CityList() {
  const { cities, status } = useContext(CitiesContext);

  //! Look into adding loading here
  console.log(status);
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <City city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
