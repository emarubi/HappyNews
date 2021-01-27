// state initial de la tranche "newsList" notre store
const initialState = {
  activitiesList: [],
};

// reducer qui va gérer les news
const activitiesReducer = (oldState = initialState, action) => {
  switch (action.type) {
    // Je dispatch une nouvelle action dans le cas d'un appel à la liste des activités
    case 'GET_ACTIVITIES_SUCCESS':
      return {
        ...oldState,
        activitiesList: action.activities,
      };
    default:
      return { ...oldState };
  }
};

export default activitiesReducer;
