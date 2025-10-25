import styles from "../WorldWise.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

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
import useGeolocation from "../../../utils/useGeolocation";

function Map() {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  const { cities } = useContext(CitiesContext);
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);

  const lat = parseFloat(searchParam.get("lat"));
  const lng = parseFloat(searchParam.get("lng"));

  useEffect(() => {
    if (!lat && !lng) return;
    setMapPosition([lat, lng]);
  }, [lat, lng]);

  useGeolocation();

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
