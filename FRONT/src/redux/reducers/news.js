import { DELETE_NEWS_SUCCESS } from 'src/redux/actions';
// state initial de la tranche "newsList" notre store
const initialState = {
  list: [],
};

// reducer qui va gérer les news
const newsReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS_SUCCESS':

      return {
        ...oldState,
        list: action.list,

      };
    case DELETE_NEWS_SUCCESS:
      return {
        ...oldState,
      };
    default:
      return { ...oldState };
  }
};

export default newsReducer;
