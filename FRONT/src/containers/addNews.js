import { connect } from 'react-redux';
import { AddNewsForm } from 'src/components/AddNewsForm';
import { addNews, changeAddNewsField } from '../redux/actions';

// const { auth } = store.getState();
// console.log(state.auth.user_id);
// Cablage des données
const mapStateToProps = (state) => ({
    article_title: state.addNews.article_title,
    description: state.addNews.description,
    picture_url: state.addNews.picture_url,
    price: state.addNews.price,
    is_news: true,
    user_id: state.auth.userId, // TODO: A récupérer depuis le localStorage 
    activity_id: state.addNews.category, // [e.target.name] = e.target.id
    // visible: state.addNews.visible
});
// console.log(state.auth.userId);

// Cablage des actions
const mapDispatchToProps = (dispatch) => ({
    handleChangeField: (name, value) => {
      console.log('name from handleChangeField : ', name);
      console.log('value from handleChangeField : ', value);
      dispatch(changeAddNewsField(name,value));
      // console.log('la value :', value);
      // console.log('le name :', name);
    },
    handleAddNews: () => {
      // dispatch(addNews());
      dispatch(handleAddNews(console.log('Je suis dans le AddNews container')));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewsForm);
