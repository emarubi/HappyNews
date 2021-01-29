import { combineReducers } from 'redux';
import authReducer from './auth';
import reducerAddNews from './reducerAddNews';
import newsReducer from './news';
import activitiesReducer from './activities';
import searchReducer from './searchReducer';

export default combineReducers({
  auth: authReducer,
  addNews: reducerAddNews,
  newsList: newsReducer,
  activities: activitiesReducer,
  searchValue: searchReducer,
});
