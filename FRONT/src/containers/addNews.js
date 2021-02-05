import { connect } from 'react-redux';
import AddNewsForm from 'src/components/AddNewsForm';
import { addNewsSuccess, changeAddNewsField, handleAddNews } from '../redux/actions';

const mapStateToProps = (state) => ({
  article_title: state.addNews.article_title,
  description: state.addNews.description,
  picture_url: state.addNews.picture_url,
  price: state.addNews.price,
  is_news: true,
  activity_id: state.addNews.activity_id,

  activities: state.activities.activitiesList,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeField: (name, value) => {
    // console.log('name from handleChangeField : ', name);
    // console.log('value from handleChangeField : ', value);
    dispatch(changeAddNewsField(name,value));
    // console.log('la value :', value);
    // console.log('le name :', name);
  },
  handleAddNews: () => {
    // dispatch(addNews());
    dispatch(handleAddNews());
  },
  addNewsSuccess: () => {
    dispatch(addNewsSuccess());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewsForm);
