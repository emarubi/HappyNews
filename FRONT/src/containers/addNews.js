import { connect } from 'react-redux';
import { AddNewsForm } from 'src/components/AddNewsForm';
import { handleAddNews } from 'src/components/Login';

const mapStateToProps = state => {
  return {
    news: [state.news],
    title: state.title,
    description: state.description,
    category: state.category,
    price: state.price,
    file:[state.file], 
    is_news: true
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewsForm);