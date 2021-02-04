import React from 'react';
import RetailPict from 'src/assets/Images/retailer.png';
import './style.scss';

const Retailer = () => (

  <section className="retailer">
    <div className="retailer__presentationText">
      <h2 className="retailer__presentationText__presentationTitle">Vous êtes Commerçant</h2>
      <p className="retailer__presentationText__presentationBody">Lorem ipsum, dolor    sit amet consectetur adipisicing elit. Expedita officia    quia alias voluptates? Corporis magni facere sint  assumenda porro ipsum! Iste laborum repellat provident   qui numquam possimus totam porro? Et?</p>
    </div>
    <div className="retailer__pictureCharacter">
      <img className="retailer__pictureCharacter__illustrationPicture" src={RetailPict} alt="retailer" />
    </div>

  </section>

);

export default Retailer;
