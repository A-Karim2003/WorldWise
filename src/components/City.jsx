import { useContext } from "react";
import styles from "./cityList.module.css";
import { Link } from "react-router-dom";
import { CitiesContext } from "../context/CitiesProvider";

function City({ city }) {
  const {
    emoji,
    cityName,
    date,
    id,
    position: { lat, lng },
  } = city;

  const { activeCityId, setActiveCityId, deleteCity } =
    useContext(CitiesContext);

  const isActive = activeCityId === id;

  return (
    <Link
      to={`${id}?lat=${lat}&lng=${lng}`}
      onClick={() => setActiveCityId(id)}
    >
      <li className={`${styles.city} ${isActive ? styles.active : ""}`}>
        <div>
          <span> {emoji} </span>
          <span> {cityName} </span>
        </div>

        <div>
          <span> ({String(date)}) </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              deleteCity(id);
            }}
          >
            {" "}
            X{" "}
          </button>
        </div>
      </li>
    </Link>
  );
}

export default City;
