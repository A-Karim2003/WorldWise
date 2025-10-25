import { useContext } from "react";
import CityCard from "./CityCard";
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

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { activeCityId, setActiveCityId } = useContext(CitiesContext);

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
          <span> ({formattedDate}) </span>
          <button> X </button>
        </div>
      </li>
    </Link>
  );
}

export default City;
