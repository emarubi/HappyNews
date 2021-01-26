//import axios pour thunk
// import axios from 'axios';
// action type  CHANGE_AUTH_FIELD 
export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS  = 'LOGIN_SUCCESS'
export const LOGIN_ERROR  = 'LOGIN_ERROR'
export const LOGOUT  = 'LOGOUT'
export const SUBSCRIBE = 'SUBSCRIBE'
// function to change input field
export const changeAuthField = (value, name) => ({
    type: 'CHANGE_AUTH_FIELD',
    name,
    value,
  });

  export const handleLogin = () => {
    return {
        type: 'LOGIN'
    };
  }

  export const handleLoginSuccess = (data) => {
    return {
        type: 'LOGIN_SUCCESS',
        data,
    };
  }  
  export const handleLogout = () => {
    return {
        type: 'LOGOUT'
    };
  }
//   export const handleLoginError = () => {
//     return {
//         type: 'LOGIN_ERROR'
//     };
//   }

export const subscriptionSubmitForm = () => {
  return {
    type: 'SUBSCRIBE'
  }
} 