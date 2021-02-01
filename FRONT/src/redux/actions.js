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

// action to get users details page for retailler's profil

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
