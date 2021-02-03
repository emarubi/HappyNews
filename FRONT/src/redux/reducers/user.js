import { GET_USER_DETAILS_ERROR, GET_USER_DETAILS_SUCCESS } from 'src/redux/actions';

const initialState = {
  user: [],
};
// console.log(initialState);
const userReducer = (state = initialState, action) => {
  switch (action.type) {
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
