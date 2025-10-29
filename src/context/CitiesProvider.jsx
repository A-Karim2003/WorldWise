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
        const res = await fetch("http://localhost:9000/cities");

        if (!res.ok)
          throw new Error(
            `Failed to fetch cities: ${res.status} ${res.statusText}`
          );

        const data = await res.json();
        setCities(data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <CitiesContext
      value={{ cities, setCities, status, activeCityId, setActiveCityId }}
    >
      {children}
    </CitiesContext>
  );
}
