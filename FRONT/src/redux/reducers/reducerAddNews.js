import data from '../../data/data';
import { ADD_NEWS } from '../constants';
// import { v4 as uuiv4 } from 'uuid';

import newsList from 'src/data/data';

const initialState = {
  news: []
}

// Helper
const helperAddData = action => {
  return {
    id: newsList.data,
    title: action.payload.title,
    author: data.shop_name
  }
}

// reducer

const reducerAddNews = (state = initialState.news, action) => {

  // condition to get newsData informations if allready exists
  if (localStorage.getItem('newsData')) {
    state = JSON.parse(localStorage.getItem('newsData'))
  }

  switch (action.type) {
    case ADD_NEWS:
      state = [...state, helperAddData(action)]
      // To have access to the news registered
      localStorage.setItem('newsData', JSON.stringify(state))
      return state;
      
    default: return state;
  }
}
export default reducerAddNews;
