import axios from 'axios';
import {LOGIN, SUBSCRIBE, handleLoginSuccess, handleSubscribeSuccess} from '../redux/actions'
const api = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { auth: { email, password } } = store.getState();

      const config = {
        method: 'post', // verbe POST
        url: 'https://api-happy-news.herokuapp.com/login', // endpoint de login
        headers: { // header pour dire qu'on parle en JSON
          'Content-Type': 'application/json',
      //   'Cookie': 'connect.sid=s%3AfhPHxE7GncGThwzNKUSGwQZV9Js-dsLN.7YjWIJyga9CxT9ftGBwlOi3BNUMQdixv1%2F3GSNYHq7M'
        },
        data:
          { // body de la requete (contenu du json)
            email,
            password,
          },
      };
      axios(config) // on lance la requete...
        .then((response) => { // cas de réussite
        // on envoie une action, pour sauvegarder les données dans le reducer
        // cette action ne sera pas traitée dans le middleware, et ira jusqu'au reducer
          // const { userToken } = response.data;
          // localStorage.setItem('token', userToken);
          // store.dispatch({
          //   type: LOGIN_SUCCESS,
          //   // localStorage.setItem('token', userToken);
          //   // on déverse tout le contenu de response.data dans notre action
          //   ...response.data,
          const { userToken } = response.data;
          store.dispatch(handleLoginSuccess(response.data));
          // on le stocke aussi dans le localStorage
          localStorage.setItem('token', userToken);
          console.log(response.data)
          console.log('Je suis dans la réponse, et response.data du Tokenvaut : ', response.data.userToken);
          console.log('Je suis dans la réponse, et response.data du first_name : ', response.data.user[0].first_name);
          console.log('Je suis dans la réponse, et response.data du logged : ', response.data.logged);
        })
        .catch((error) => { // cas d'erreur
          console.log(error);
        });
      break;
    }
    case SUBSCRIBE: {
      const { auth: { last_name, first_name,adress, zip_code,
        city,company_name ,shop_name ,registration_number ,role_id,
        ImputEmailSub, InputPasswordSub, activity_id  } } = store.getState();
        let config = {
          method: 'post',
          url: 'https://api-happy-news.herokuapp.com/signup',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : { last_name, first_name,adress, zip_code,
            city,company_name ,shop_name ,registration_number ,role_id,
            ImputEmailSub, InputPasswordSub, activity_id  }
        };
        axios(config)
        .then((response) => {
          const { userToken } = response.data;
          console.log(response.data)
          store.dispatch(handleSubscribeSuccess(response.data));
          localStorage.setItem('token', userToken);
          console.log('Je suis dans la réponse, et response.data du Tokenvaut : ', response.data.password);

        })
        .catch((error) => { // cas d'erreur
          console.log(error);
        });
      }
    default:
      next(action);
  }
};

export default api;
