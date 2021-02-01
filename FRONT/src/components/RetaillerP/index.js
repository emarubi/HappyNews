import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfilInformation from 'src/components/RetaillerP/ProfilInformation';
import './style.scss';
import Tabs from './Tabs';
import TitleProfil from './TitleProfil';

const RetailerP = ({ loadUserDetails, user }) => {
  const { id } = useParams();
  useEffect(() => {
    loadUserDetails(id);
  }, []);

  return (
    <div className="profil-container">
      <TitleProfil> bienvenue sur votre profil {user.first_name} </TitleProfil>
      <ProfilInformation />
      <Tabs />
    </div>
  );
};

export default RetailerP;
