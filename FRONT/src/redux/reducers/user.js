import { GET_USER_DETAILS_ERROR, GET_USER_DETAILS_SUCCESS, GET_ALL_USERS_SUCCESS } from 'src/redux/actions';

const initialState = {
  user: [],
  users: [],
};
console.log(initialState);
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
      };
    case GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case GET_USER_DETAILS_ERROR:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
