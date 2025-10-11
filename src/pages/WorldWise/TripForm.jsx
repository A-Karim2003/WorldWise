import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./worldwise.module.css";

function TripForm() {
  const [cityName, setCityName] = useState();
  const [notes, setNotes] = useState();
  const [date, setDate] = useState();

  const navigate = useNavigate();

  function navigateBack(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <form className={styles.tripForm}>
      <div>
        <label htmlFor="city">City name</label>
        <input
          id="city"
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
      </div>

      <div>
        <label htmlFor="date">When did you go to?</label>
        <input
          id="date"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div>
        <label htmlFor="notes">Notes about your trip to</label>
        <textarea
          id="notes"
          rows="4"
          placeholder="Write something about your trip..."
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        ></textarea>
      </div>

      <div className={styles.buttonGroup}>
        <button type="submit">ADD +</button>
        <button type="button" onClick={navigateBack}>
          <span>← </span>BACK
        </button>
      </div>
    </form>
  );
}

export default TripForm;
