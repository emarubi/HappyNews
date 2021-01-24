import { CHANGE_AUTH_FIELD } from 'src/redux/actions';
export const initialState = {
    email: '',
    password: '',
};

const authReducer = (state = initialState, action ) => {
    switch (action.type) {
      case CHANGE_AUTH_FIELD:
        return {
          ...state,
          [action.name]: action.value
        };

      default:
        return { ...state };
    }
  };
  
  export default authReducer;