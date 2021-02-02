import React from 'react';
import Avatar from 'src/components/Header/Avatar';
import InformationForm from 'src/containers/InformationForm';
import AddNewsForm from 'src/containers/addNews';
import AddNewsButton from '../AddNewsButton';
import './style.scss';

const ProfilInformation = () => (
  <div className="information-container">
    <div className="avatar-profil">
      <Avatar />
    </div>
    <InformationForm />
    <AddNewsButton />
    <AddNewsForm />
  </div>
);

export default ProfilInformation;
