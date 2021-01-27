import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import thunk from 'redux-thunk';
import authMiddleware from '../middlewares/auth';
// import de mon middleware d'appel a api (requête pour obtenir les news)
import api from '../middlewares/api';
// rootReducer = résultat de combineReducers
import rootReducer from './reducers';

// on crée le store
const store = createStore (rootReducer, composeWithDevTools(applyMiddleware(
  // commentaire de auth mid pour thunk
  authMiddleware,
  api,
)));

export default store;


