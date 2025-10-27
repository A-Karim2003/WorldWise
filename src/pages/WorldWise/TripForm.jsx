import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./worldwise.module.css";
import useUrlPosition from "../../hooks/useUrlPosition";

function countryToFlag(country) {
  const codePoints = country
    .toUpperCase()
    .replace(/ /g, "") // remove spaces if any
    .slice(0, 2) // ensure only two letters
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function TripForm() {
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [isCityFound, setIsCityFound] = useState();
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");
  const { lat, lng } = useUrlPosition();
  const navigate = useNavigate();

  function tripData() {
    return {
      cityName: cityName,
      country: countryName,
      emoji: countryToFlag(countryCode),
      date: date || new Date().toLocaleDateString("en-GB"),
      notes: notes,
      position: {
        lat: lat,
        lng: lng,
      },
      id: Math.floor(Math.random() * 1_000_000_0000),
    };
  }

  useEffect(() => {
    if (!lat || !lng) return;

    async function fetchReverseGeolocation() {
      try {
        const res = await fetch(
          `https://api-bdc.io/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
        );

        console.log(res);

        if (!res.ok)
          throw new Error(
            `Failed to fetch location data: ${res.status} ${res.statusText}`
          );

        const { city, locality, countryName, countryCode } = await res.json();

        if (!city && locality) {
          setIsCityFound(false);
          return;
        }
        setIsCityFound(true);
        setCityName(city || locality);
        setCountryName(countryName);
        setCountryCode(countryCode);
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
  if (!isCityFound)
    return (
      <p className={styles.message}>
        👋 That doesn't seem to be a city. Click somewhere else 😉
      </p>
    );

  if (!lat && !lng)
    return (
      <p className={styles.message}>Start by clicking somewhere on the map</p>
    );

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
        <label htmlFor="date">When did you go to {cityName}?</label>
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
