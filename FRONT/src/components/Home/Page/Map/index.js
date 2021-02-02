import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import propTypes from 'prop-types';
import axios from 'axios';
import {
  MapContainer, Marker, Popup, TileLayer, useMap,
} from 'react-leaflet';
import L from 'leaflet';
import './style.scss';
// import 'leaflet/dist/leaflet.css';
import placeholder from '../../../../assets/Images/placeholder.png';

// icon for visitor is imported from images  directory
const visitorIcon = L.icon({
  iconUrl: placeholder,
  iconSize: [40, 40],
});

const zoom = 14;
const cityCoord = [48.864716, 2.349014];

function Maps() {
  // define a state for an activeUser, when the visitor click on a user Marker on the map
  // if the vsitor doesn't select a user Marker, the activeUser is set at null in the state
  const [activeUser, setActiveUser] = useState(null);

  const [users, setUsers] = useState([]);

  // const [city, setCity] = useState([]);

  const cityCoordinates = localStorage.getItem('cityCoordinates');

  console.log(cityCoordinates);
  // // axios request to fetch adress data from server https://geo.api.gouv.fr/adresse
  // axios request to fetch users data from heroku server
  useEffect(() => {
    axios.get('https://api-happy-news.herokuapp.com/user')
      .then((response) => {
        console.log(response);
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const [map, setMap] = useState();
  // visitor geoLocalisation on the Map
  function LocationMarker() {
    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
      map.locate().on('locationfound', (e) => {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
      // Stops watching location previously initiated by map.locate
      return function cleanup() {
        map.stopLocate();
      };
    }, [map]);
    // the code above, if you want to geolocate on click
    // const map = useMapEvents({
    //   click() {
    //     map.locate();
    //   },
    //   locationfound(e) {
    //     setPosition(e.latlng);
    //     map.flyTo(e.latlng, map.getZoom());
    //   },
    // });

    return position === null ? null : (
      <Marker
        position={position}
        // riseOnHover
        icon={visitorIcon}
      >
        <Popup>Vous êtes ici</Popup>
      </Marker>
    );
  }

  return (
    <>
      <section className="map__container">
        {cityCoord
      && (
        <MapContainer
          center={cityCoord}
          zoom={zoom}
          // style={{ height: '70vh' }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <LocationMarker />

          {users.length
        && users.map((user) => (
          (!isNaN(parseFloat(user.latitude)) || !isNaN(parseFloat(user.longitude)))
            && (
            <Marker
              key={user.id}
              position={[parseFloat(user.latitude), parseFloat(user.longitude)]}
              eventHandlers={{
                click: () => {
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
            // closeOnClick={false}
          >
            <div>
              <h2><Link to={`/commercant/profil/:${activeUser.id}`}>{activeUser.shop_name}</Link></h2>
              <p>{activeUser.activity_name}</p>
            </div>
          </Popup>
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
                <p>{activeUser.activity_name}</p>
              </div>
            </Popup>
            )}
        </MapContainer>
      )}
      </section>
    </>
  );
}

/* Maps.propTypes = {
  cityCoordinates: propTypes.array,
};

Maps.defaultProps = {
  cityCoordinates: [48.864716, 2.349014],
}; */

export default Maps;
