import { useState } from "react";

function useGeolocation() {
  const [status, setStatus] = useState({
    status: "idle",
    statusMessage: "",
  });
  const [position, setPosition] = useState("idle");

  function getPosition() {
    if (!navigator.geolocation)
      return setStatus({
        status: "error",
        statusMessage: "Your browser does not support geolocation",
      });

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setStatus({ status: "success", statusMessage: "Location retrieved." });
      },
      (error) => {
        setStatus({ status: "error" });
        if (error.code === error.PERMISSION_DENIED) {
          setStatus({
            status: "error",
            statusMessage: "User denied geolocation permission.",
          });
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          setStatus({
            status: "error",
            statusMessage: "Position information is unavailable.",
          });
        } else if (error.code === error.TIMEOUT) {
          setStatus({
            status: "error",
            statusMessage: "Request for location timed out.",
          });
        } else {
          setStatus({
            status: "error",
            statusMessage: "An unknown error occurred.",
          });
        }
      }
    );
  }

  return { status, position, getPosition };
}

export default useGeolocation;
