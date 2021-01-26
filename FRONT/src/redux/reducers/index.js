import { combineReducers } from 'redux';
import authReducer from './auth';
import reducerAddNews from './reducerAddNews';
import newsReducer from './news';

export default combineReducers({
  auth: authReducer,
  addNews: reducerAddNews,
  newsList: newsReducer,
});
