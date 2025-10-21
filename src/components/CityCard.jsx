import styles from "./cityList.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { CitiesContext } from "../context/CitiesProvider";
import { useContext } from "react";

function CityCard() {
  const { id } = useParams();
  const cityData = useContext(CitiesContext);
  const navigate = useNavigate();

  switch (cityData.status) {
    case "idle":
      return null;
    case "loading":
      return <p>Loading...</p>;

    case "error":
      return <p>Something went wrong.</p>;
  }

  const [countryData] = cityData.cities.filter(
    (city) => city.id === Number(id)
  );

  const { emoji: flag, country, date } = countryData;

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.cityCard}>
      <div className={styles.section}>
        <h4 className={styles.label}>CITY NAME</h4>
        <p className={styles.value}>
          <span>{flag}</span> {country}
        </p>
      </div>

      <div className={styles.section}>
        <h4 className={styles.label}>YOU WENT TO {country} ON</h4>
        <p className={styles.value}>{formattedDate}</p>
      </div>

      <div className={styles.section}>
        <h4 className={styles.label}>LEARN MORE</h4>
        <a
          href={`https://en.wikipedia.org/wiki/${country}`}
          className={styles.link}
        >
          Check out {country} on Wikipedia →
        </a>
      </div>

      <button onClick={() => navigate(-1)} className={styles.backButton}>
        ← BACK
      </button>
    </div>
  );
}

export default CityCard;
