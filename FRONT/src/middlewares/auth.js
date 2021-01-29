import axios from 'axios';
import FormData from 'form-data';
import {LOGIN, SUBSCRIBE, handleLoginSuccess, handleSubscribeSuccess} from '../redux/actions'

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      console.log(state)

      const form = new FormData();
      form.append('email', state.auth.email);
      form.append('password', state.auth.password);
      console.log(form)

      const config = {
        method: 'post', // verbe POST
        url: 'https://api-happy-news.herokuapp.com/login', // endpoint de login
        data: form,
        headers: { 
          'Content-Type': 'multipart/form-data',
        }
      };
      axios(config) // on lance la requete...
        .then((response) => { // cas de réussite

          const { userToken } = response.data;
          console.log(userToken)
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
      // const { auth: { first_name, last_name, adress, zip_code,
      //   city, company_name, shop_name, registration_number, role_id,
      //   email, password, activity_id  } } = store.getState();
      const state = store.getState();
      console.log(state)

    const form = new FormData();
    form.append('first_name', state.auth.first_name);
    console.log(state.auth.first_name)
    form.append('last_name', state.auth.last_name);
    console.log(state.auth.last_name)
    form.append('adress', state.auth.adress);
    console.log(state.auth.adress)
    form.append('zip_code', state.auth.zip_code);
    console.log(state.auth.zip_code)
    form.append('city', state.auth.city);
    console.log(state.auth.city)
    form.append('email', state.auth.email);
    console.log(state.auth.email)
    form.append('password', state.auth.password);
    console.log(state.auth.password)
    form.append('role_id', state.auth.role_id);
    console.log(state.auth.role_id)
    form.append('company_name', state.auth.company_name);
    console.log(state.auth.company_name)
    form.append('shop_name', state.auth.shop_name);
    console.log(state.auth.shop_name)
    form.append('registration_number', state.auth.registration_number);
    console.log(state.auth.registration_number)
    form.append('activity_id', state.auth.activity_id);
    console.log(state.auth.activity_id)
    console.log(form);
        const config = {
          method: 'post',
          url: 'https://api-happy-news.herokuapp.com/signup',
          data : form,
          headers: { 
            'Content-Type': 'multipart/form-data',
          },       
        };
        axios(config)
        .then((response) => {
          console.log(response.data.data.city)
          store.dispatch(handleSubscribeSuccess(response.data));
          
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
