import { ADD_BOOKS } from '../constants';

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

const reducerAddNews = (initialState, ADD_BOOKS) => {
  switch (action.type) {
    case ADD_BOOKS:
      [..state, helperAddNews(action)]
      break;
  
    default:
      break;
  }
}