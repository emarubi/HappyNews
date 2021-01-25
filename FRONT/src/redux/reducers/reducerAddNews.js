import { ADD_NEWS } from '../constants';
import { v4 as uuiv4 } from 'uuid';

const initialState = {
  news: []
}

// Helper
const helperAddData = action => {
  return {
    id: uuiv4(),
    title: action.payload.title,
    author: action.payload.author
  }
}

// reducer

export const reducerAddNews = (state = initialState.news, action) => {

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

