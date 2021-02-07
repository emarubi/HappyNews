import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Title() {
  return (
    <div className="title">
      <NavLink to="/">
        <h1 className="title-h1">
          Happy News
        </h1>
      </NavLink>
      {/* <p className="header-accroche">Vos producteurs locaux ont une bonne nouvelle à vous annoncer</p> */}
    </div>
  );
}
