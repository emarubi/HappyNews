import { ADD_NEWS } from './constants';

const addNews = data => {
  return {
    type: ADD_NEWS,
    payload: data  /** Object */
  }
}
