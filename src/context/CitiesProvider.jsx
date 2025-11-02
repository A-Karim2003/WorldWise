import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function reducer(state, action) {
  switch (action.type) {
    case "cities/created":
      return { ...state, cities: [...state.cities, action.payload] };
    case "cities/read":
      return { ...state, cities: action.payload };
    case "cities/updated":
      return {
        ...state,
        cities: state.cities.map((city) =>
          city.id === action.payload.id ? action.payload : city
        ),
      };
    case "cities/deleted":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    case "set/activeCity":
      break;
    case "loading":
      return { ...state, status: "loading" };
    case "success":
      return { ...state, status: "success" };
    case "error":
      return { ...state, status: "error" };
    case "city/selected":
      return { ...state, activeCityId: action.payload };
    default:
      console.error("Unknown action type:", action.type);
      return state;
  }
}

/* eslint-disable react-refresh/only-export-components */
export const CitiesContext = createContext(null);

export default function CitiesProvider({ children }) {
  const navigate = useNavigate();

  const [{ cities, status, activeCityId }, dispatch] = useReducer(reducer, {
    cities: [],
    status: "idle",
    activeCityId: null,
  });

  //* CREATE CITY ✅
  async function postNewCity(newCity) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch("http://localhost:9000/cities", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCity),
      });

      if (!res.ok) {
        toast("Failed to add city", {
          containerId: "errorToast",
          position: "bottom-right",
          className: "errorToast",
        });
        throw new Error(`Failed to add city: ${res.status} ${res.statusText}`);
      }
      const city = await res.json();
      dispatch({ type: "cities/created", payload: city });

      toast("City added:", {
        containerId: "successToast",
        className: "successToast",
        position: "bottom-right",
      });
      navigate("/worldwise/cities");
      dispatch({ type: "success" });
    } catch (error) {
      console.error(error.message);
      dispatch({ type: "error" });
    }
  }

  //* READ CITIES ✅
  useEffect(() => {
    dispatch({ type: "loading" });
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:9000/cities");

        if (!res.ok) {
          toast("Failed to fetch cities", {
            containerId: "errorToast",
            position: "bottom-right",
            className: "errorToast",
          });
          throw new Error(
            `Failed to fetch cities: ${res.status} ${res.statusText}`
          );
        }

        const data = await res.json();
        dispatch({ type: "cities/read", payload: data });
        dispatch({ type: "success" });
      } catch (error) {
        dispatch({ type: "error" });
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

  //* UPDATE CITY
  async function updateCity(updatedCity) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(
        `http://localhost:9000/cities/${updatedCity.id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCity),
        }
      );

      if (!res.ok) {
        toast("Failed to update city", {
          containerId: "errorToast",
          position: "bottom-right",
          className: "errorToast",
        });
        throw new Error(`Failed to update city: ${res.status}`);
      }

      const updatedItem = await res.json();
      dispatch({ type: "cities/updated", payload: updatedItem });
      toast("City updated", {
        position: "bottom-right",
        className: "updateToast",
      });
      dispatch({ type: "success" });
    } catch (error) {
      console.error(error.message);
      dispatch({ type: "error" });
    }
  }

  //* DELETE CITY
  async function deleteCity(id) {
    try {
      if (!id) {
        console.error("id is not defined");
        return;
      }

      dispatch({ type: "loading" });

      const res = await fetch(`http://localhost:9000/cities/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        toast("Failed to delete city", {
          containerId: "errorToast",
          position: "bottom-right",
          className: "errorToast",
        });
        throw new Error(
          `Failed to delete city: ${res.status} ${res.statusText}`
        );
      }
      dispatch({ type: "cities/deleted", payload: id });

      toast("City deleted", {
        containerId: "deleteToast",
        position: "bottom-right",
        className: "deleteToast",
      });

      dispatch({ type: "success" });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "error" });
    }
  }

  return (
    <CitiesContext
      value={{
        cities,
        status,
        activeCityId,
        postNewCity,
        updateCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext>
  );
}
