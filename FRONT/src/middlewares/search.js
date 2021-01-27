import axios from 'axios';

import {
  SUBMIT_SEARCH,
  saveResults,
} from 'src/redux/actions';

const searchMiddleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_SEARCH) {
    const { searchValue } = store.getState();

    // on crée un objet config pour faire notre requete
    const config = {
      method: 'get', // on veut faire un get
      url: `https://api.spotify.com/v1/search?q=${searchValue}&type=track&market=FR&limit=10&offset=0`, // ici on a l'adresse
      headers: {
        'Content-Type': 'application/json', // header qui dit qu'on envoie et recoit du json
      },
    };

    axios(config) // on appelle axios avec cet objet de config
      .then((response) => { // then = cas de réussite
        store.dispatch(saveResults(response.data));
      })
      .catch(() => { // catch : cas d'erreur
        // todo
      });
    next(action);
  }
  next(action);
};

export default searchMiddleware;
