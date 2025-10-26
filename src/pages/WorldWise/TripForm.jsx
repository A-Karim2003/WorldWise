import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./worldwise.module.css";
import useUrlPosition from "../../hooks/useUrlPosition";

function TripForm() {
  const [cityName, setCityName] = useState();
  const [notes, setNotes] = useState();
  const [date, setDate] = useState();
  const { lat, lng } = useUrlPosition();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchReverseGeolocation() {
      try {
        const res = await fetch(
          `https://api-bdc.io/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
        );
        if (!res.ok)
          throw new Error(
            `Failed to fetch location data: ${res.status} ${res.statusText}`
          );
        const { city } = await res.json();
        setCityName(city);
      } catch (e) {
        console.log(`Error fetching location data: ${e.message}`);
      }
    }
    fetchReverseGeolocation();
  }, [lat, lng]);

  function navigateBack(e) {
    e.preventDefault();
    navigate("/worldwise/cities");
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
