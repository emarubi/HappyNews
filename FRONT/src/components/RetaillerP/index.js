import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfilInformation from 'src/components/RetaillerP/ProfilInformation';
import Tabs from 'src/containers/tab';
import './style.scss';
import TitleProfil from './TitleProfil';

const RetailerP = ({
  loadUserDetails, user, loadNews,
}) => {
  const { id } = useParams();
  useEffect(() => {
    loadUserDetails(id);
    loadNews();
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
