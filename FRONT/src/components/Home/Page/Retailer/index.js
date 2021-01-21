import React from 'react';
import RetailPict from '../../../../assets/Images/retailer.png';

import './style.scss';

const Retailer = () => {
  return (
    <body>
      {/** ------------------ Wave --------------- */}
      <div class="custom-shape-divider-top-1611227983">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
        </div>

      <section className="character retailer">
      
        <div className="content">
          <div className="presentationText retailer">
            <h2 className="presentationTitle retailer">Vous êtes Commerçant</h2>
            <p className="presentationBody retailer">Lorem ipsum, dolor    sit amet consectetur adipisicing elit. Expedita officia    quia alias voluptates? Corporis magni facere sint  assumenda porro ipsum! Iste laborum repellat provident   qui numquam possimus totam porro? Et?</p>
          </div>
          <div className="pictureCharacter">
              <img className="illustrationPicture retailer" src={ RetailPict } alt="retailer"/>
          </div>

        </div>
      </section> 
    </body>
  )
}

export default Retailer;

