import styles from "./worldwise.module.css";

function TripForm() {
  return (
    <form className={styles.tripForm}>
      <div>
        <label htmlFor="city">City name</label>
        <input id="city" type="text" placeholder="Enter city name" />
      </div>

      <div>
        <label htmlFor="date">When did you go to?</label>
        <input id="date" type="date" />
      </div>

      <div>
        <label htmlFor="notes">Notes about your trip to</label>
        <textarea
          id="notes"
          rows="4"
          placeholder="Write something about your trip..."
        ></textarea>
      </div>

      <div className={styles.buttonGroup}>
        <button type="submit">ADD +</button>
        <button type="button">
          <span>← </span>BACK
        </button>
      </div>
    </form>
  );
}

export default TripForm;
