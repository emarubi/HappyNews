import React from 'react';
import mapPict from '../../../../assets/Images/map.PNG';
import Wave from '../../../../assets/Images/wave.png';

import './style.scss';

const Maps = () => {
  return (
       <section className="mapSection">
            <div className="wrap">
                <img className="map-Picture"src={ mapPict } alt="map"/>
                <img className="wave-pic" src={ Wave} alt="wave"/>
            </div>     
        </section> 
  )
} 

export default Maps;