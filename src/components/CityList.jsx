import styles from "./cityList.module.css";
import City from "./City";

function CityList({ cities, status }) {
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => {
        return <City city={city} key={city.id} />;
      })}
    </ul>
  );
}

export default CityList;
