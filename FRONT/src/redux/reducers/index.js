import { combineReducers } from 'redux';
import activitiesReducer from './activities';
import authReducer from './auth';
import newsReducer from './news';
// import reducerAddNews from './reducerAddNews';
import userReducer from './user';

export default combineReducers({
  auth: authReducer,
  // addNews: reducerAddNews,
  user: userReducer,
  newsList: newsReducer,
  activities: activitiesReducer,
});
