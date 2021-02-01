export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_ERROR  = 'LOGIN_ERROR'
export const LOGOUT = 'LOGOUT';
export const SUBSCRIBE = 'SUBSCRIBE';
export const SUBSCRIBE_ROLE_ID = 'SUBSCRIBE_ROLE_ID';
export const GET_SELECT_FIELD = 'GET_SELECT_FIELD';
export const SUBSCRIBE_SUCCESS = 'GET_SELECT_FIELD';
// export const SUBSCRIBE_ERROR= 'SUBSCRIBE_ERROR'
export const ADD_NEWS_SUCCESS = 'ADD_NEWS_SUCCESS';
export const ADD_NEWS = 'ADD_NEWS';
export const CHANGE_ADDNEWS_FIELD = 'CHANGE_ADDNEWS_FIELD';
// function to change input field
/* export const changeAuthField = (value, name) => ({
    type: CHANGE_AUTH_FIELD,
    name,
    value,
  });

  export const handleLogin = () => {
    return {
        type: LOGIN
    };
  }

  export const handleLogout = () => {
    return {
        type: LOGOUT
    };
  } */

// Function to change fields on addNewsForm
export const changeAddNewsField = (name, value) => ({
  type: CHANGE_ADDNEWS_FIELD,
  name,
  value,
});

// Function to submit the addNewsForm
export const addNews = () => ({
  type: ADD_NEWS,
});
// >>>>>>> origin/front/getDataFromNewsForm

// ACTION CREATOR YANN
// je crée une action pour le changement de la valeur de l'input de recherche
// de la page News
export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const SEARCH = 'SEARCH';
export const ACTIVITY_SELECTED = 'ACTIVITY_SELECTED';

export const changeSearchValueAction = (value, name) => ({
  type: CHANGE_SEARCH_VALUE,
  value,
  name,
});

export const handleSearchSubmit = () => ({
  type: 'SEARCH',
});

export const handleSelectedActivity = (value) => ({
  type: ACTIVITY_SELECTED,
  value,
});

export const addNewsSuccess = (data) => ({
  type: ADD_NEWS_SUCCESS,
  data,
});

// export for gettting user in retailler's profil information
export const GET_USER_DETAILS = 'GET_USER_DETAILS';
export const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS';
export const GET_USER_DETAILS_ERROR = 'GET_USER_DETAILS_ERROR';

export const changeAuthField = (value, name) => ({
  type: CHANGE_AUTH_FIELD,
  name,
  value,
});
export const handleLogin = () => ({
  type: LOGIN,
});
export const handleLoginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data,
});
export const handleLogout = () => ({
  type: LOGOUT,
});
//   export const handleLoginError = () => {
//     return {
//         type: 'LOGIN_ERROR'
//     };
//   }

export const subscriptionSubmitForm = () => {
  console.log('je suis dans submit form de l\'action creation');
  return {
    type: SUBSCRIBE,
  };
};
export const HandleRoleIdChecked = (checked) => {
  console.log('je suis dans mon action createur et checked vaut', checked);
  return {
    type: 'SUBSCRIBE_ROLE_ID',
    checked,
  };
};
export const getSelectField = (value) => ({
  type: 'GET_SELECT_FIELD',
  value,
});
export const handleSubscribeSuccess = (data) => ({
  type: SUBSCRIBE_SUCCESS,
  data,
});
//   export const handleSubscribeError = () => {
//     return {
//         type: 'SUBSCRIBE_ERROR'
//     };
//   }
export const getUserDetails = (id) => ({
  type: GET_USER_DETAILS,
  id,
});
export const getUserDetailsSuccess = (user) => ({
  type: GET_USER_DETAILS_SUCCESS,
  user,
});
export const getUserDetailsError = () => ({
  type: GET_USER_DETAILS_ERROR,
});
