import React, { useState } from 'react';

import {
  MapContainer, TileLayer, Marker, Popup, useMapEvents,
} from 'react-leaflet';

// import users from './user';
import './style.scss';

const Maps = () => {
  const users = [
    {
      id: 1, latitude: 43.7413633, longitude: 7.2471444, shop_name: 'paper plane',
    },
    {
      id: 2, latitude: 43.742224, longitude: 7.239953, shop_name: 'Tout est bon dans le cochon',
    },
    {
      id: 5, latitude: 43.739581, longitude: 7.237217, shop_name: "L'Art du Pain",
    },
  ];

  // define a state for an activeUser, when the visitor click on a user Marker on the map
  // if the vsitor doesn't select a user Marker, the activeUser is set at null in the state
  const [activeUser, setActiveUser] = useState(null);

  // const position = [48.856614, 2.3522219]; // coordonnées GPS de Paris
  // visitor geoLocalisation on the Map
  function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>Vous êtes ici</Popup>
      </Marker>
    );
  }

  return (

    <MapContainer className="mapContainer" center={[48.856614, 2.3522219]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker />

      {users.map((user) => (
        <Marker
          key={user.id}
          position={[user.latitude, user.longitude]}
          eventHandlers={{
            click: () => {
              console.log('marker clicked', user.shop_name);
              setActiveUser(user);
            },
          }}
        />
      ))}
      {/* check if there is an active user (if the visitor click on is marker), if true, it shows a Popup */}
      {activeUser && (
        <Popup
          position={[activeUser.latitude, activeUser.longitude]}
        >
          <div>
            <h2>{activeUser.shop_name}</h2>
          </div>
        </Popup>
      )}
    </MapContainer>

  );
};
export default Maps;
