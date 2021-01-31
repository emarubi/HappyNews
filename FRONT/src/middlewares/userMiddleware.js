import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import FormData from 'form-data';
import {GET_USER_DETAILS, getUserDetailsSuccess} from '../redux/actions'

const userApi = (store) => (next) => (action) => {

  console.log('je suis dans middl')
  switch (action.type) {
    
    case GET_USER_DETAILS:{
      // let params = action.id
      console.log('je suis dans middl')
      // const config = {
      //   method: 'get',
      //   url: `https://api-happy-news.herokuapp.com/user/${2}`,
      //   headers: { 
      //     'Content-Type': 'application/json'
      //   },
      // };
      // ${id
      // on déclenche la requete
      axios.get(`https://api-happy-news.herokuapp.com/user/${action.id}`)
      // axios(config)
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
      break;
    }
    default:
      next(action);
  }
};

export default userApi;

