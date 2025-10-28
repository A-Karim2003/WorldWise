import styles from "../WorldWise.module.css";
import { useNavigate } from "react-router-dom";

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
import Spinner from "../../../components/Spinner";

function Map() {
  const { cities } = useContext(CitiesContext);
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);

  const {
    status: geoStatus,
    geolocationPosition,
    getPosition,
  } = useGeolocation();

  const { status } = geoStatus;

  const { lat, lng } = useUrlPosition();

  useEffect(() => {
    if (!lat && !lng) return;
    setMapPosition([lat, lng]);
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
        {status === "loading" ? "LOADING POSITION..." : "USE YOUR POSITION"}
      </Button>
    </div>
  );
}

function ChangeMapCenter({ position }) {
  const map = useMap();
  map.flyTo(position, map.getZoom(), { duration: 2.0 });
  return null;
}

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
