import data from '../../data/data';
import { ADD_NEWS } from '../actions';

// Initial State
const initialState = {
  news: [],
  title: '',
  description: '',
  category: '',
  price: '',
  file:[], 
  is_news: true
}

// reducer

const reducerAddNews = (state = initialState, action) => {
  console.log('state dans le reducer:', state)

  switch (action.type) {
    case ADD_NEWS:
      state = [ ...state ]
      return state

    default:
      break;
  }
  return { ...state}
}

export default reducerAddNews;
