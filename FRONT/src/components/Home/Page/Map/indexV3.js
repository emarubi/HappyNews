import React, { useState } from 'react';
// import axios from 'axios';
import {
  MapContainer, TileLayer, Marker,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './style.scss';

const Maps = () => {
  const users = [
    { id: 1, latitude: 43.7413633, longitude: 7.2471444 },
    { id: 2, latitude: 43.742224, longitude: 7.239953 },
    { id: 5, latitude: 43.739581, longitude: 7.237217 },
  ];

  return (

    <MapContainer center={[48.856614, 2.3522219]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {users.map((user) => (
        <Marker
          key={user.id}
          center={[user.latitude, user.longitude]}
        />
      ))}

    </MapContainer>

  );
};
export default Maps;
