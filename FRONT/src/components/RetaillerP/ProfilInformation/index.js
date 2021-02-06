import React from 'react';
import Avatar from 'src/components/Header/Avatar';
import InformationForm from 'src/containers/InformationForm';
// import AddNewsButton from '../AddNewsButton';
import './style.scss';

const ProfilInformation = () => (
  <div className="information-container">
    <div className="avatar-profil">
      <Avatar />
    </div>
    <InformationForm />
    {/* <AddNewsButton /> */}
  </div>
);

export default ProfilInformation;
