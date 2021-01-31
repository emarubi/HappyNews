import React, {useEffect} from 'react';
import ProfilInformation from './ProfilInformation';
import axios from 'axios';
import './style.scss';
import Tabs from './Tabs';
import TitleProfil from './TitleProfil';
import {useParams} from 'react-router-dom'
const RetailerP = () => {
  let {id}= useParams()

  useEffect(() => {
    // const userApi = (store) => (next) => (action) => {
      // console.log('je suis dans middl')
      // switch (action.type) {
      //   case GET_USER_DETAILS: 
          console.log('je suis dans middl')
          // const config = {
          //   method: 'get',
          //   url: 'https://api-happy-news.herokuapp.com/user',
          //   headers: { 
          //     'Content-Type': 'application/json'
          //   },
          // };
          // on déclenche la requete
          // axios.get('https://api-happy-news.herokuapp.com/user')
          axios.get(`https://api-happy-news.herokuapp.com/user/${id}`)
          // (config)
            .then((response) => { // requete réussie
              // on envoie une action pour sauvegarder la liste des news (articles)
              // avec un second paramètre qui contient la réponse
              console.log(response.data.data)
              store.dispatch(getUserDetailsSuccess(response.data.data));
              // store.dispatch({ type: 'GET_USER_DETAILS_SUCCESS', user: response.data.data });
            })
            .catch((error) => { // cas d'erreur
            console.log(error);
          });
          // break;
        
    //     default:
    //       next(action);
    //   }
    // };
  },[])
  return (
    <div className='profil-container'> 
      <TitleProfil> bienvenue sur votre profil  </TitleProfil>
      <ProfilInformation />
      <Tabs />
    </div>
  );
}
    
export default RetailerP;
