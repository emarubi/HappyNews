import React from 'react';

import ShopCard from '../../../../assets/Images/shopCard.png';
import ProfilePict from '../../../../assets/Images/profile_pic.png';

import './style.scss'

const RetailerProfile = () => {
  return (
    <section className="general">
      <div className="frame">
        <div className="title-section">
          <h2 className="title">Profil Commerçant</h2>
        </div>

        <div className="top-section">
          <h3 className="title-section">Profil</h3>
          <div className="content-profile">
            <div className="left-side">
              <div className="pict-container">
                <img src={ ProfilePict } alt="" className="profile-pict"/>
              </div>
              <div className="text-container">
                <ul className="profile-list">
                  <li>Nom:</li>
                  <li>Prénom:</li>
                  <li>Age:</li>
                  <li>N° Siret:</li>
                  <li>Enseigne:</li>
                </ul>
              </div>
            </div>

            <div className="right-side">
              <div className="content-right-side">
                <button>Modifier le profil</button>
              </div>
            </div>

          </div>
        </div>

        <div className="bottom-section">
          <div className="title-bottom-section">
            <ul>
              <li>Mes News</li>
              <li>Ma vitrine</li>
              <li>Mon chiffre</li>
            </ul>
          </div>
          <div className="content-bottom-section">
            <div className="card-one">
              <h3 className="title-card">Titre</h3>
              <img className="card-Pict" src={ ShopCard } alt="shop card"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RetailerProfile;