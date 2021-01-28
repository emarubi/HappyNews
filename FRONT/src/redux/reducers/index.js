import { combineReducers } from 'redux';
import authReducer from './auth';
import AddNewsReducer from './reducerAddNews';
import newsReducer from './news';

export default combineReducers({
  auth: authReducer,
  addNews: AddNewsReducer,
  newsList: newsReducer,
});
