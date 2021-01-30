import React from 'react';
import RetailPict from '../../../../assets/Images/retailer.png';

import './style.scss';

const Retailer = () => {
  return (
    <div>
      <section className="character retailer">
          <div className="presentationText retailer">
            <h2 className="presentationTitle retailer">Vous êtes Commerçant</h2>
            <p className="presentationBody retailer">Lorem ipsum, dolor    sit amet consectetur adipisicing elit. Expedita officia    quia alias voluptates? Corporis magni facere sint  assumenda porro ipsum! Iste laborum repellat provident   qui numquam possimus totam porro? Et?</p>
          </div>
          <div className="pictureCharacter">
              <img className="illustrationPicture retailer" src={ RetailPict } alt="retailer"/>
          </div>

      </section> 
    </div>
  )
}

  </section>

);

export default Retailer;
