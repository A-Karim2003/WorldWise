import styles from "./cityList.module.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function CityCard() {
  const { id } = useParams();
  const cityData = useFetch();

  switch (cityData.status) {
    case "idle":
      return null;
    case "loading":
      return <p>Loading...</p>;

    case "error":
      return <p>Something went wrong.</p>;
  }

  console.log(cityData);

  const [countryData] = cityData.cities.filter(
    (city) => city.id === Number(id)
  );

  const { emoji: flag, country, date } = countryData;
  console.log(flag, country, date);

  return (
    <div className={styles.cityCard}>
      <div className={styles.section}>
        <h4 className={styles.label}>CITY NAME</h4>
        <p className={styles.value}>
          <span>🇪🇸</span> Quiroga
        </p>
      </div>

      <div className={styles.section}>
        <h4 className={styles.label}>YOU WENT TO QUIROGA ON</h4>
        <p className={styles.value}>Thursday, October 9, 2025</p>
      </div>

      <div className={styles.section}>
        <h4 className={styles.label}>LEARN MORE</h4>
        <a href="#" className={styles.link}>
          Check out Quiroga on Wikipedia →
        </a>
      </div>

      <button className={styles.backButton}>← BACK</button>
    </div>
  );
}

export default CityCard;
