import { useCallback, useState } from "react";
import { toast } from "react-toastify";

function useGeolocation(defaultPositon = null) {
  const [geoStatus, setGeoStatus] = useState("idle");
  const [geolocationPosition, setGeolocationPosition] =
    useState(defaultPositon);

  const getPosition = useCallback(() => {
    setGeoStatus("loading");

    if (!navigator.geolocation) return setGeoStatus("error");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeolocationPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setGeoStatus("success");
      },
      (error) => {
        console.error("Geolocation error:", error.message);

        if (error.code === error.PERMISSION_DENIED) {
          toast.error("Location permission denied");
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          toast.error("Location unavailable. Try again later.");
        } else if (error.code === error.TIMEOUT) {
          toast.error("Location request timed out");
        }

        setGeoStatus("error");
      }
    );
  }, []);

  return { geoStatus, geolocationPosition, getPosition };
}

export default useGeolocation;
