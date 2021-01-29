// import { CHANGE_SEARCH_VALUE } from '../actions';
import { CHANGE_SEARCH_VALUE, SEARCH } from 'src/redux/actions';

const initialState = {
  searchValue: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return { ...state, searchValue: action.value };
    default:
      return { ...state };
  }
};

export default searchReducer;
