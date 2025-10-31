import styles from "../WorldWise.module.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";

import { useContext, useEffect, useState } from "react";
import { CitiesContext } from "../../../context/CitiesProvider";
import Button from "../../../components/AppLayout/Button";
import useGeolocation from "../../../hooks/useGeolocation";
import useUrlPosition from "../../../hooks/useUrlPosition";

function Map() {
  const { cities } = useContext(CitiesContext);
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);

  const { geoStatus, geolocationPosition, getPosition } = useGeolocation();

  const { lat, lng } = useUrlPosition();

  // Automatically fetch geolocation on mount
  useEffect(() => {
    getPosition();
    // eslint-disable-next-line
  }, []);
  1;

  useEffect(() => {
    if (lat && lng) return setMapPosition([lat, lng]);
  }, [lat, lng]);

  useEffect(() => {
    if (!geolocationPosition) return;
    setMapPosition(geolocationPosition);
  }, [geolocationPosition]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <ChangeMapCenter position={mapPosition} />
        <GetLocation />
        {cities.map((city) => {
          const { lat, lng } = city.position;
          return (
            <Marker key={city.id} position={[lat, lng]}>
              <Popup>{city.notes}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
      <Button className={styles.getLocationBtn} onClick={getPosition}>
        {geoStatus === "loading" ? "LOADING POSITION..." : "USE YOUR POSITION"}
      </Button>
      <ToastContainer containerId={"successToast"} autoClose={2000} />
      <ToastContainer containerId={"deleteToast"} autoClose={2000} />
    </div>
  );
}

function ChangeMapCenter({ position }) {
  const map = useMap();
  map.flyTo(position, map.getZoom(), { duration: 2.0 });
  return null;
}

/*
  This function returns the coordinates (lat, lng) 
  of the clicked location within the map  and passes
  it to the url
*/
function GetLocation() {
  const navigate = useNavigate();
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      navigate(`form?lat=${lat}&lng=${lng}`);
    },
  });
}
export default Map;
