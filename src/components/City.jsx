import styles from "./cityList.module.css";
import { Link } from "react-router-dom";

function City({ city }) {
  const { emoji, cityName, date, id } = city;

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link to={`${id}`}>
      <li className={styles.city}>
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
