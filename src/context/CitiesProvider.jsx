import { createContext, useEffect, useState } from "react";

/* eslint-disable react-refresh/only-export-components */
export const CitiesContext = createContext(null);

export default function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [status, setStatus] = useState("idle");
  const [activeCityId, setActiveCityId] = useState();

  useEffect(() => {
    async function fetchData() {
      setStatus("loading");
      try {
        const res = await fetch("/data/cities.json");

        if (!res.ok)
          throw new Error(
            `Failed to fetch cities: ${res.status} ${res.statusText}`
          );

        const { cities } = await res.json();
        setCities(cities);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <CitiesContext value={{ cities, status, activeCityId, setActiveCityId }}>
      {children}
    </CitiesContext>
  );
}
