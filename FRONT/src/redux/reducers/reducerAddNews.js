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

const reducerAddNews = ( state = initialState.news, ADD_BOOKS) => {
  switch (action.type) {
    case ADD_BOOKS:
      state = [..state, helperAddNews(action)]
      return state;
      
    default:
      break;
  }
}

export default reducerAddNews;