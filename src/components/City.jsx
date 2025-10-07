import styles from "./cityList.module.css";

function City({ city }) {
  const { emoji, cityName, date } = city;

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  console.log(formattedDate);

  return (
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
  );
}

export default City;
