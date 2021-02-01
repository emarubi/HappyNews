import React from 'react';
import ProfilInformation from './ProfilInformation';
import './style.scss';
import Tabs from './Tabs';
import TitleProfil from './TitleProfil';

const CUstomerP = () => (
  <div className="Profil-container">
    <TitleProfil> Mon profil client </TitleProfil>
    <ProfilInformation />
    <Tabs />
  </div>
);

export default CUstomerP;
