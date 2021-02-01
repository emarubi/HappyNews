import { combineReducers } from 'redux';
import authReducer from './auth';
import AddNewsReducer from './reducerAddNews';
import newsReducer from './news';
import activitiesReducer from './activities';
import searchReducer from './searchReducer';

export default combineReducers({
  auth: authReducer,
  addNews: AddNewsReducer,
  newsList: newsReducer,
  activities: activitiesReducer,
  searchValue: searchReducer,
});
