// state initial de la tranche "newsList" notre store
const initialState = {
  list: [],
  activities: [],
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
    case 'GET_ACTIVITIES_SUCCESS':
      return {
        ...oldState,
        activities: action.activities,
      };
    default:
      return { ...oldState };
  }
};

export default newsReducer;
