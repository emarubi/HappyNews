import React, { useRef, useEffect, forwardRef } from 'react';
// import L from 'leaflet';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
import './style.scss';

const location = [48.856614, 2.3522219];
const zoom = 3;

function Maps() {
  const mapRef = useRef();
  useEffect(() => {
    // mapRef detructuration to extract current and initialise it at {}
    const { current = {} } = mapRef;
    // current destructuration to extract leafletElement and rename it map
    // map is the central class of the API — it is used to create a map on a page and manipulate it
    const { leafletElement: map } = current;
    console.log('current', current);
    console.log('map', map);
    setTimeout(() => { // we leave a Timeout to the map to charge
      map.flyTo(location, 14, {
        duration: 3,
      }); // we tell anew position were to move
    }, 1000);
  }, [mapRef]);
  return (
    <section className="mapSection">
      <MapContainer className="leaflet-container" ref={mapRef} center={location} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location}>
          <Popup>Vous êtes ici</Popup>
        </Marker>
      </MapContainer>

    </section>
  );
}

export default Maps;
