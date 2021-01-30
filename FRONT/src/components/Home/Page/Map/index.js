import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  MapContainer, TileLayer, Marker, Popup, useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
// import users from './user';
import './style.scss';
import placeholder from '../../../../assets/Images/placeholder.png';
// import useGeoLocation from './useGeoLocation';

// icon for visitor is imported from images  directory
const visitorIcon = L.icon({
  iconUrl: placeholder,
  iconSize: [40, 40],
});

const Maps = () => {
  // define a state for an activeUser, when the visitor click on a user Marker on the map
  // if the vsitor doesn't select a user Marker, the activeUser is set at null in the state
  const [activeUser, setActiveUser] = useState(null);

  const [users, setUsers] = useState([]);

  // const mapRef = useRef();

  // const location = useGeoLocation();
  // console.log('location avant showMyLocation', location);

  // const showMyLocation = () => {
  //   console.log('location dans showMyLocation', location);
  //   if (location.loaded && !location.error) {
  //     // eslint-disable-next-line max-len
  //     console.log('nous sommes dans showMyLocation');
  //     mapRef.current.L.flyTo([location.coordinates.lat, location.coordinates.lng], 13, { animate: true });
  //   }
  //   else {
  //     console.log(location.error.message);
  //   }
  // };
  // showMyLocation;

  useEffect(() => {
    axios.get('https://api-happy-news.herokuapp.com/user')
      .then((response) => {
        console.log(response);
        setUsers(response.data.data);
      })
      .catch((error) => {
      });
  }, []);

  console.log('users après requête axios', users);

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
      <Marker
        position={position}
        riseOnHover
        icon={visitorIcon}
      >
        <Popup>Vous êtes ici</Popup>
      </Marker>
    );
  }

  return (

    <MapContainer
      center={[48.856614, 2.3522219]}
      zoom={13}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {location.loaded && !location.error && (
        <Marker
          icon={visitorIcon}
          position={[location.coordinates.lat, location.coordinates.lng]}
        >
          <Popup>Vous êtes ici</Popup>
        </Marker>
      )}

      <LocationMarker />

      {users.length
        && users.map((user) => (
          (!isNaN(parseFloat(user.latitude)) || !isNaN(parseFloat(user.longitude)))
            && (
            <Marker
              key={user.id}
              position={[parseFloat(user.latitude), parseFloat(user.longitude)]}
              eventHandlers={{
                mouseover: () => {
                  console.log('marker clicked', user.shop_name);
                  setActiveUser(user);
                },
              }}
            />
            )
        ))}
      {/* check if there is an active user (if the visitor click on is marker), if true, it shows a Popup */}
      {activeUser && (
        <Popup
          position={[activeUser.latitude, activeUser.longitude]}
          closeOnClick={false}
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
