import React from 'react';
import ProfilePict from 'src/assets/Images/profile_pic.png';
import ShopCard from 'src/assets/Images/shopCard.png';
import './style.scss';



const CustomerProfile = () => {
  return (
    <section className="general">
      <div className="frame">
        <div className="title-section">
          <h2 className="title">Profil Client</h2>
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
              <li>Mes Achats</li>
              <li>Mes Favoris</li>
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

export default CustomerProfile;