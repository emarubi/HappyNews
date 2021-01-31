import React, {useEffect} from 'react';
import ProfilInformation from './ProfilInformation';
import axios from 'axios';
import './style.scss';
import Tabs from './Tabs';
import TitleProfil from './TitleProfil';
import {useParams} from 'react-router-dom'
const RetailerP = ({loadUserDetails, user}) => {
  let {id} = useParams()
  useEffect(() => {
    loadUserDetails(id);
  }, [user]);

  return (
    <div className='profil-container'> 
      <TitleProfil> bienvenue sur votre profil {user.first_name} </TitleProfil>
      <ProfilInformation />
      <Tabs />
    </div>
  );
}
    
export default RetailerP;
