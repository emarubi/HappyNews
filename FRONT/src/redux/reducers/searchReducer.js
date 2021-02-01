// import { CHANGE_SEARCH_VALUE } from '../actions';
import { CHANGE_SEARCH_VALUE, ACTIVITY_SELECTED } from 'src/redux/actions';

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
