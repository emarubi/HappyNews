import axios from 'axios';
import { ADD_NEWS, ADD_NEWS_SUCCESS } from '../redux/actions';

const add = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_NEWS: {
      // Faire la requête pour l'ajout de news
      // On récupère l'objet qui défini la news et DANS L'ORDRE que le back attends sinon ça ne passera pas
      // store.getstate nous donne l'état du store à un instant T. On le déstructure pour prendre ce dont on a besoin
      const { } = store.getState();

      const formData = new FormData;
// tu vas remplir ton formData, avec les données de ton formulaire
      const config = {
        method: 'post', // verbe de la requête, ici un post pour insérer des informations à la bdd
        url: 'https://api-happy-news.herokuapp.com/', // Voir avec Fredo pour finir la route. Viser celle pour la creation de new
        headers: {
          'Content-Type' : 'multipart/form-data', // Ici on précise le type de data qu'on envoie. Celui-ci sert à pouvoir envoyer du texte et des fichiers
        },
        data: formData
/*         { // Ici insérer les datas voulus

        } */
      };

      axios(config)
        .then((response) => { // La requête réussit
          console.log('Je suis dans la réponse, et response.data vaut:', response.data);

          const { userToken } = response.data; // On stocke le contenu de la réponse dans le userToken
          localStorage.setItem('token', userToken); // On le stocke aussi dans le localStorage
          // TODO: faire les différents clg en fonction des datas envoyées pour vérifier que tout passe correctement. 


        })
        .catch((error) => { // La requête échoue
          console.log('Je suis dans la réponse, et response.error vaut:', response.error);
        })
      break;
    }
      
  
    default:
      next(action);
  }
};

export default add;