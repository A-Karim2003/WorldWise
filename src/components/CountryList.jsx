import styles from "./cityList.module.css";

function CountryList({ cities, status }) {
  const countries = new Map();

  cities.forEach(
    (city) =>
      !countries.has(city.country) &&
      countries.set(city.country, {
        name: city.country,
        flag: city.emoji,
      })
  );

  const filteredCountries = Array.from(countries.values());

  return (
    <ul className={styles.countryList}>
      {filteredCountries.map((country) => {
        return (
          <li className={styles.country} key={country.name}>
            <span>{country.flag}</span>
            <span>{country.name}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default CountryList;
