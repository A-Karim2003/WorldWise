import styles from "../WorldWise.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useContext, useState } from "react";
import { CitiesContext } from "../../../context/CitiesProvider";

function Map() {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  const { cities } = useContext(CitiesContext);

  const mapLat = parseFloat(searchParam.get("lat")) || 51.505; // ✅ fallback values
  const mapLng = parseFloat(searchParam.get("lng")) || -0.09;

  const [mapPosition, setMapPosition] = useState([mapLat, mapLng]);

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("/worldwise/form");
      }}
    >
      <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
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

export default Map;
