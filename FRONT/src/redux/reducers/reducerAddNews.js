import data from '../../data/data';
import { ADD_NEWS } from '../constants';

const initialState = {
  news: []
}

// reducer

const reducerAddNews = (state = initialState) => {  // manque ', action' dans param 
  console.log('state:', state)
  return { ...state}
}
export default reducerAddNews;
