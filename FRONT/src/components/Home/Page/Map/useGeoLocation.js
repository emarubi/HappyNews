import React, { useState, useEffect } from 'react';

const useGeoLocation = () => {
  // define a state for geolocation
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: '', lng: '' },
  });

  const onSuccess = (pos) => {
    console.log('you are in onSuccess', pos.coords);
    setLocation({
      loaded: true,
      coordinates: {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    console.log('you are in onError', error.message);
    // setLocation({
    //   loaded: true,
    //   // coordinates: {
    //   //   lat: 48.856614,
    //   //   lng: 2.3522219,
    //   // },
    //   error,
    // });
  };

  useEffect(() => {
    // eslint-disable-next-line quotes
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }
  }, []);

  // run geolocation
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
  return location;
};

export default useGeoLocation;
