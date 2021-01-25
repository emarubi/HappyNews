import React from 'react';
import ProfilInformation from './ProfilInformation';
import './style.scss';
import Tabs from './Tabs';
import TitleProfil from './TitleProfil';


const RetailerP = () => {
  return (
    <div className='Profil-container'> 
      <TitleProfil> Mon profil commercant </TitleProfil>
      <ProfilInformation />
      <Tabs />
    </div>
  );
}
    
export default RetailerP;