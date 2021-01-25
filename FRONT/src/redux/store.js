import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducerAddNews } from './reducers/reducerAddNews';

console.log(reducerAddNews);
const rootReducer = combineReducers({
  newsList: reducerAddNews
})


// on crée le store
const store = createStore (rootReducer,composeWithDevTools());

export default store;
