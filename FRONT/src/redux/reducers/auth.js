// ajout de loggin success pour thunk
import { CHANGE_AUTH_FIELD, LOGIN_SUCCESS, LOGOUT } from 'src/redux/actions';

export const initialState = {
    email: '',
    password: '',
    logged : false,   
    token: null || localStorage.getItem('token'),
    first_name : null,
    name: '',
    prenom: '',
    address: '',
    zip_code: '',
    ville: '',
    societe:'',
    enseigne: '',
    siret: '',
    ImputEmailSub: '',
    InputPasswordSub: '',
    InputPasswordverified: ''
};

const authReducer = (state = initialState, action ) => {
    switch (action.type) {
      case CHANGE_AUTH_FIELD:
        return {
          ...state,
          [action.name]: action.value
        };
        
    // case 'LOGIN_SUCCESS':
      case LOGIN_SUCCESS:
      return {
        ...state,
        // on copie les données de l'action dans le reducer
        logged: action.data.logged,
        token: action.data.userToken,
        first_name : action.data.user[0].first_name
      };
      case LOGOUT:
        localStorage.removeItem('token')
        return {
          ...state,
          logged: false,
          token: null,
          // 2eme changement
          email: '',
          password: '',
          first_name: null,
          
        };
        default:
        return { ...state };
    }
  };
  
  export default authReducer;