import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  MapContainer, Marker, Popup, TileLayer, useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import placeholder from '../../../../assets/Images/placeholder.png';

// icon for visitor is imported from images  directory
const visitorIcon = L.icon({
  iconUrl: placeholder,
  iconSize: [40, 40],
});

const zoom = 13;
const regionCoord = [48.864716, 2.349014];

function Maps() {
  // define a state for an activeUser, when the visitor click on a user Marker on the map
  // if the vsitor doesn't select a user Marker, the activeUser is set at null in the state
  const [activeUser, setActiveUser] = useState(null);

  const [users, setUsers] = useState([]);

  // axios request to fetch data from server
  useEffect(() => {
    axios.get('https://api-happy-news.herokuapp.com/user')
      .then((response) => {
        console.log(response);
        setUsers(response.data.data);
      })
      .catch((error) => {
      });
  }, []);

  const [map, setMap] = useState();
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
    <>
      {regionCoord
      && (
        <MapContainer
          center={regionCoord}
          zoom={zoom}
          style={{ height: '60vh' }}
          whenCreated={setMap}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LocationMarker />

          {LocationMarker.position
        && (
          <Marker position={LocationMarker.position} icon={visitorIcon}>
            <Popup>Vous êtes ici</Popup>
          </Marker>
        )}

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
          {/* check if there is an active user (if the visitor click on is marker),
        if true, it shows a Popup */}
          {activeUser && (
          <Popup
            position={[activeUser.latitude, activeUser.longitude]}
            closeOnClick={false}
            keepInView
          >
            <div>
              {/* <h2>{activeUser.shop_name}</h2> */}
              {/* <p> <Link to={`/user/${activeUser.id}`}>{activeUser.shop_name}</Link></p> */}
              <p><Link to={`/commercant/profil/:${activeUser.id}`}>{activeUser.shop_name}</Link></p>
            </div>
          </Popup>
          )}
        </MapContainer>
      )}
    </>
  );
}

export default Maps;
