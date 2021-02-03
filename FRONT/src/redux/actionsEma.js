import axios from 'axios';
// import { getDataCity } from '../redux/actions';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    // shows all shop owners on the map when starts
    // case 'GET_USERS':
    //   // axios query on bdd
    //   axios.get('https://api-happy-news.herokuapp.com/user')
    //     .then((response) => {
    //       console.log(response.data);
    //       store.dispatch(getAllUsers(response.data));
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   break;
    // // locate users on map from home search bar
    // case 'GET_GPS_COORDINATES':
    //   axios.get(`https://api-adresse.data.gouv.fr/search/?q=${search}`)
    //     .then((response) => {
    //       // console.log(response.data);
    //       const coordGPSCity = [
    //         response.data.features[0].geometry.coordinates[1],
    //         response.data.features[0].geometry.coordinates[0],
    //       ];
    //       store.dispatch(getDataCity(coordGPSCity));
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    //   break;
    case 'GET_NEWS':
      // on déclenche la requete
      axios.get('https://api-happy-news.herokuapp.com/article')
        .then((response) => { // requete réussie
          // on envoie une action pour sauvegarder les recettes
          // avec un second paramètre qui contient la réponse
          store.dispatch({ type: 'GET_NEWS_SUCCESS', list: response.data.data });
        });
      break;
    default:
      next(action);
  }
};

export default api;
