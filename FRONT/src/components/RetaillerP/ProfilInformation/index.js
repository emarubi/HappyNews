import React from 'react';
// import Avatar from 'src/components/Header/Avatar';
import InformationForm from 'src/containers/InformationForm';
// import AddNewsButton from '../AddNewsButton';
import retailProfilPic from '../../../assets/Images/profile.png';
import showcase from '../../../assets/Images/vitrine.png';
import './style.scss';

const ProfilInformation = () => (
  <div className="information-container">
    {/* <div className="avatar-profil">
      <Avatar />
    </div> */}
    <div>
      <img className="picture-container" alt="profil-pic" src={retailProfilPic} />
    </div>
    <InformationForm />
    {/* <AddNewsButton /> */}
    <div>
      <img className="picture-container" alt="showcase-pic" src={showcase} />
    </div>
  </div>
);

export default ProfilInformation;
