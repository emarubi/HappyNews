//import axios pour thunk
// import axios from 'axios';
// action type  CHANGE_AUTH_FIELD 
export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS  = 'LOGIN_SUCCESS'
export const LOGIN_ERROR  = 'LOGIN_ERROR'
export const LOGOUT  = 'LOGOUT'
// function to change input field
export const changeAuthField = (value, name) => ({
    type: CHANGE_AUTH_FIELD,
    name,
    value,
  });

  export const handleLogin = () => {
    return {
        type: 'LOGIN'
    };
  }

  export const handleLogout = () => {
    return {
        type: 'LOGOUT'
    };
  }


  import { ADD_NEWS } from './constants';

  export const addNews = data => {
    return {
      type: ADD_NEWS,
      payload: data  /** Object */
    }
  }
  // >>>>>>> origin/front/getDataFromNewsForm

// ACTION CREATOR YANN
// je crée une action pour le changement de la valeur de l'input de recherche
// de la page News
export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const SEARCH = 'SEARCH';

export const changeSearchValueAction = (value, name) => ({
  type: CHANGE_SEARCH_VALUE,
  value,
  name,
});

export const handleSearchSubmit = () => ({
  type: 'SEARCH',
});















//   export const handleLoginSuccess = () => {
//     return {
//         type: 'LOGIN_SUCCESS'
//     };
//   }
//   export const handleLoginError = () => {
//     return {
//         type: 'LOGIN_ERROR'
//     };
//   }

//   export const handleLogin = () => {
//       console.log('je suis dans thhunk')    
//     let config = {
//         method: 'post', // verbe POST
//         url: 'https://api-happy-news.herokuapp.com/login', // endpoint de login
//         headers: { // header pour dire qu'on parle en JSON
//           'Content-Type': 'application/json',
//         //   'Cookie': 'connect.sid=s%3AfhPHxE7GncGThwzNKUSGwQZV9Js-dsLN.7YjWIJyga9CxT9ftGBwlOi3BNUMQdixv1%2F3GSNYHq7M'
//         },
//         data: 
// { // body de la requete (contenu du json)
//     email,
//     password,
//   },
//       };
//     // ici on fait un appel a l'API on va donc dispatcher la premiere action pour mettre le loading a true
      
//             axios(config)
//             // A - l'API nous renvois des commentaires, on est dans le 2eme cas ( cf L21)
//             .then (response => {
//                 dispatch(handleLoginSuccess(response.data)) // data est le résultat de notre requete soit tous les comments, qui vont etre passé au payload
//                 console.log('Je suis dans la réponse, et response.data du Tokenvaut : ', response.data.userToken);
//                 console.log('Je suis dans la réponse, et response.data du first_name : ', response.data.user.first_name);
//             })
//             .catch(error => {
//                 console.log(error)
//                 // dispatch(handleLoginError(error.message))
//             })
      
//     }
