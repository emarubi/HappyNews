import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import FormData from 'form-data';
import {
  getAllUsers, getAllUsersSuccess, getUserDetailsSuccess, GET_USER_DETAILS, GET_ALL_USERS,
} from '../redux/actions';

const userApi = (store) => (next) => (action) => {
  switch (action.type) {
    // shows all shop owners on the map when starts
    case GET_ALL_USERS:
      axios.get('https://api-happy-news.herokuapp.com/user')
        .then((response) => {
          console.log(response.data.data);
          store.dispatch(getAllUsersSuccess(response.data.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case GET_USER_DETAILS: {
      // let params = action.id
      console.log('je suis dans middl');
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
          console.log(response.data.data);
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
