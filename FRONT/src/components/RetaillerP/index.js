import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfilInformation from 'src/components/RetaillerP/ProfilInformation';
import AddNewsButton from './AddNewsButton';
// import AddNewsForm from 'src/containers/addNews';
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
      {/* <AddNewsButton /> */}
      {/* <AddNewsForm /> */}
      <Tabs />
    </div>
  );
};

export default RetailerP;
