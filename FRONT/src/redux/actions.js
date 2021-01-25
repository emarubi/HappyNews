import { ADD_NEWS } from './constants';

export const addNews = data => {
  return {
    type: ADD_NEWS,
    payload: data  /** Object */
  }
}
