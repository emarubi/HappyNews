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
    default:
      return { ...oldState };
  }
};

export default newsReducer;
