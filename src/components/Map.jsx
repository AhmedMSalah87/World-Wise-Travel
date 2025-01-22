import React, { useContext, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import styles from "./Map.module.css";
import { useNavigate } from "react-router";
import { CitiesContext } from "./CitiesContext";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const { state } = useContext(CitiesContext);

  const navigate = useNavigate();

  const map = useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      setPosition({ lat, lng });
      navigate(`form?lat=${lat}&lng=${lng}`);
    },
  });

  return (
    position && (
      <>
        {state.cities.map((city, index) => (
          <Marker position={[city.lat, city.lng]} key={index}>
            {console.log(city)}
            <Popup>
              <span>{city.countryFlag}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </>
    )
  );
}

const Map = () => {
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default Map;
