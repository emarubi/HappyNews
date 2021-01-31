import { combineReducers } from 'redux';
import authReducer from './auth';
// import reducerAddNews from './reducerAddNews';
// import userReducer from './user';
import newsReducer from './news';
import activitiesReducer from './activities';

export default combineReducers({
  auth: authReducer,
  // addNews: reducerAddNews,
  // user : userReducer,
  newsList: newsReducer,
  activities: activitiesReducer,
});
