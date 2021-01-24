// action type  CHANGE_AUTH_FIELD 
export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS  = 'LOGIN_SUCCESS'
export const LOGIN_ERROR  = 'LOGIN_ERROR'
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
  export const handleLoginSuccess = () => {
    return {
        type: 'LOGIN_SUCCESS'
    };
  }
  export const handleLoginError = () => {
    return {
        type: 'LOGIN_ERROR'
    };
  }