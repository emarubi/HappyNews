import React from 'react';
import ProfilInformation from './ProfilInformation';
import './style.scss';
import Tabs from './Tabs';
import TitleProfil from './TitleProfil';

const RetailerP = () => {
  const prenom = JSON.parse(localStorage.getItem('first_name'))
  return (
    <div className='profil-container'> 
      <TitleProfil> bienvenue sur votre profil {prenom} </TitleProfil>
      <ProfilInformation />
      <Tabs />
    </div>
  );
}
    
export default RetailerP;
