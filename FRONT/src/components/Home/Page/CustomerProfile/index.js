import React from 'react'

import ShopCard from '../../../../assets/Images/shopCard.png';

const CustomerProfile = () => {
  return (
    <section>
      <div className="frame">
        <div className="title-section">
          <h2 className="title">Profil Client</h2>
        </div>

        <div className="top-section">
          <div className="pict-container">
            <img src="" alt="" className="profile-pict"/>
          </div>
          <div className="text-container">
          <p className="profile-description"></p>
          </div>
        </div>

        <div className="bottom-section">
          <div className="title-bottom-section">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div className="content-bottom-section">
            <div className="card-one">
              première card
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopCard;