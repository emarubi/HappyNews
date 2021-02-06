import React from 'react';
import './style.scss';

const TitleProfil = ({ children }) => (
  <div className="title__retailer">
    <h2 className="title__retailer__profil">
      {children}
    </h2>
  </div>
);

export default TitleProfil;
