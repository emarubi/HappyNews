import { connect } from 'react-redux';
import { AddNewsForm } from 'src/components/AddNewsForm';
import { changeAddNewsField } from '../redux/actions';

// Cablage des données
const mapStateToProps = (state) => ({
  description: state.addNews.description,
  picture_url: state.addNews.file,
  price: state.addNews.price,
  is_news: true,
  user_id: '', // TODO: A récupérer depuis le localStorage
  activity_id: state.addNews.category,
});

// Cablage des actions
const mapDispatchToProps = (dispatch) => ({
  handleChangeField: (name, value) => {
    dispatch(changeAddNewsField(name, value));
    // console.log('la value :', value);
    // console.log('le name :', name);
  },
  handleAddNews: () => {
    // dispatch(addNews());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewsForm);
