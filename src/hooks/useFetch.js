import { useEffect, useState } from "react";

export function useFetch() {
  const [cities, setCities] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    async function fetchData() {
      setStatus("loading");
      try {
        const res = await fetch("/data/cities.json");

        if (!res.ok) {
          throw new Error(
            `Failed to fetch cities: ${res.status} ${res.statusText}`
          );
        }
        const { cities } = await res.json();
        setCities(cities);
        setStatus("success");
      } catch (error) {
        setStatus(error.message);
      }
    }
    fetchData();
  }, []);

  return { cities, status };
}
