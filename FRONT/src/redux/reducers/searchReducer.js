// import { CHANGE_SEARCH_VALUE } from '../actions';
import { ACTIVITY_SELECTED, CHANGE_SEARCH_VALUE } from 'src/redux/actions';

const initialState = {
  searchValue: '',
  activitySelected: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return { ...state, searchValue: action.value };
    case ACTIVITY_SELECTED:
      return { ...state, activitySelected: action.value };
    default:
      return { ...state };
  }
};

export default searchReducer;
