import { ADD_BOOKS } from '../constants';
import { v4 as uuiv4 } from 'uuid';

const initialState = {
  news: []
}

const helperAddNews = action => {
  return {
    id: uuiv4(),
    title:action.payload.title,
    author:action.payload.author
  }
}

// reducer

const reducerAddNews = ( state = initialState.news, ADD_BOOKS) => {

  // condition to get newsData informations ir allready exists
  if (localStorage.getItem('newsData')) {
    state = JSON.parse(localStorage.getItem('newsData'))
  }

  switch (action.type) {
    case ADD_BOOKS:
      state = [..state, helperAddNews(action)]
      // To have access to the news registered
      localStorage.setItem('newsData', JSON.stringify(state))
      return state;
      
    default:
      break;
  }
}

export default reducerAddNews;