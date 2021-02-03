import { CHANGE_ADDNEWS_FIELD, SHOW_MODAL, HIDE_MODAL } from '../actions';

// Initial State
const initialState = {
    article_title: '',
    description: '',
    picture_url: '',
    price: '',
    is_news: true, 
    user_id: null, // A récupérer depuis le localstorage
    activity_id: '', // A récupérer depuis un champs déroulant. 9 id différents à récup dans le back
    // modalType: null,
    // modalProps: {}
}

// reducer

const reducerAddNews = (oldState = initialState, action) => {
  console.log('oldState dans le reducer:', oldState);

  switch (action.type) {
    case CHANGE_ADDNEWS_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };
    // case SHOW_MODAL:
    //   return {
    //     ...oldState,
    //     modalType: action.modalType,
    //     modalProps: action.modalProps
    //   };
    // case HIDE_MODAL:
    //   return initialState
    
    default:
      return { ...oldState };
  }
};

export default reducerAddNews;
