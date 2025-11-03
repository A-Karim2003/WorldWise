import { useContext, useEffect, useState } from "react";
import styles from "./worldwise.module.css";
import { CitiesContext } from "../../context/CitiesProvider";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import DatePicker from "react-datepicker";
import Button from "../../components/AppLayout/Button";

function UpdateNotesForm() {
  const { cities, updateCity } = useContext(CitiesContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [city] = cities.filter((city) => city.id === id);

  const [date, setDate] = useState();
  const [notes, setNotes] = useState();

  /*
    used to sync date and notes state with the 
    data stored in API
  */
  useEffect(() => {
    if (!city) return;
    setDate(city.date);
    setNotes(city.notes);
  }, [city]);

  if (!city) return <Spinner />;

  //* handles preparing update city functionility
  function handleSubmit(e) {
    e.preventDefault();

    const updatedCity = {
      ...city,
      date: date,
      notes: notes,
    };

    updateCity(updatedCity);
    navigate("/worldwise/cities");
  }

  return (
    <form className={styles.updateTripForm} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">When did you go to {city.cityName}?</label>

        <DatePicker
          id="date"
          type="date"
          onChange={(date) =>
            setDate(new Date(date).toLocaleDateString("en-GB"))
          }
          value={date}
          className={styles.datePicker}
        />
      </div>

      <div>
        <label htmlFor="notes">Notes about your trip</label>
        <textarea
          id="notes"
          rows="4"
          placeholder="Update something about your trip..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>
      <Button>Update</Button>
    </form>
  );
}

export default UpdateNotesForm;
