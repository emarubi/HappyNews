// import { CHANGE_SEARCH_VALUE } from '../actions';
<<<<<<< HEAD
import { CHANGE_SEARCH_VALUE, ACTIVITY_SELECTED, GET_CITY_FROM_API_SUCCESS } from 'src/redux/actions';
=======
import { ACTIVITY_SELECTED, CHANGE_SEARCH_VALUE } from 'src/redux/actions';
>>>>>>> origin/front/retailler-profil

const initialState = {
  searchValue: '',
  activitySelected: '',
  cityCoordinates: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return { ...state, searchValue: action.value };
    case ACTIVITY_SELECTED:
      return { ...state, activitySelected: action.value };
    case GET_CITY_FROM_API_SUCCESS:
      return { ...state, cityCoordinates: action.cityCoordinates };
    default:
      return { ...state };
  }
};

export default searchReducer;
