// state initial de la tranche "newsList" notre store
const initialState = {
  list: [],
  all_activities: [],
};

// reducer qui va gérer les news
const newsReducer = (oldState = initialState, action) => {
  switch (action.type) {
    case 'GET_NEWS_SUCCESS':
      return {
        ...oldState,
        list: action.list,
      };
    // Je dispatch une nouvelle action dans le cas d'un appel à la liste des activités
    case 'GET_ACTIVITIES':
      return {
        ...oldState,
        all_activities: action.all_activities,
      };
    default:
      return { ...oldState };
  }
};

export default newsReducer;
