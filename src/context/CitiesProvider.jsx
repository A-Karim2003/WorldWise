import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/* eslint-disable react-refresh/only-export-components */
export const CitiesContext = createContext(null);

export default function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [status, setStatus] = useState("idle");
  const [activeCityId, setActiveCityId] = useState();
  const navigate = useNavigate();

  //* Creating City
  async function postNewCity(newCity) {
    try {
      const res = await fetch("http://localhost:9000/cities", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCity),
      });

      if (!res.ok)
        throw new Error(`Failed to add city: ${res.status} ${res.statusText}`);

      const city = await res.json();
      setCities((prev) => [...prev, city]);
      toast("City added:", {
        containerId: "successToast",
        className: "successToast",
        position: "bottom-right",
      });
      navigate("/worldwise/cities");
    } catch (error) {
      console.error(error.message);
    }
  }

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

  async function deleteCity(id) {
    try {
      if (!id) {
        console.error("id is not defined");
        return;
      }

      const res = await fetch(`http://localhost:9000/cities/${id}`, {
        method: "DELETE",
      });

      if (!res.ok)
        throw new Error(
          `Failed to delete city: ${res.status} ${res.statusText}`
        );

      setCities((cities) => cities.filter((city) => city.id !== id));
      toast("City deleted", {
        containerId: "deleteToast",
        position: "bottom-right",
        className: "deleteToast",
      });
    } catch (error) {
      console.log(error.messaage);
    }
  }

  return (
    <CitiesContext
      value={{
        cities,
        setCities,
        status,
        activeCityId,
        setActiveCityId,
        deleteCity,
        postNewCity,
      }}
    >
      {children}
    </CitiesContext>
  );
}
