import { SET_SEARCH_VALUE, SAVE_RESULTS } from 'src/redux/actions';

const initialState = {
  searchValue: '',
  searchResults: {},
};

export default function reducer(oldState = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return { ...oldState, searchValue: action.value };
    case SAVE_RESULTS:
      return { ...oldState, searchResults: action.results };
    default:
      return { ...oldState };
  }
}
