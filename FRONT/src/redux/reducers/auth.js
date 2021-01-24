import { CHANGE_AUTH_FIELD } from 'src/redux/actions';

export const initialState = {
    email: '',
    password: '',
    logged : false,
    token: null,
    first_name : null
};

const authReducer = (state = initialState, action ) => {
    switch (action.type) {
      case CHANGE_AUTH_FIELD:
        return {
          ...state,
          [action.name]: action.value
        };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        // on copie les données de l'action dans le reducer
        logged: action.logged,
        token: action.token,
      };
        default:
        return { ...state };
    }
  };
  
  export default authReducer;