import { combineReducers } from 'redux';
import authReducer from './auth';
import addNews from './reducerAddNews';
import newsReducer from './news';

export default combineReducers({
  auth: authReducer,
  addNews,
  newsList: newsReducer,
});
