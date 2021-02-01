import { combineReducers } from 'redux';
import activitiesReducer from './activities';
import authReducer from './auth';
import newsReducer from './news';
import AddNewsReducer from './reducerAddNews';
import searchReducer from './searchReducer';
import userReducer from './user';

export default combineReducers({
  auth: authReducer,
  addNews: AddNewsReducer,
  user: userReducer,
  newsList: newsReducer,
  activities: activitiesReducer,
  searchValue: searchReducer,
});
