import { connect } from 'react-redux';
import { AddNewsForm } from 'src/components/AddNewsForm';
// import { handleAddNews } from 'src/components/Login';
// import { changeAuthField } from '../redux/actions';
import { changeAddNewsField } from '../redux/actions';

// Cablage des données
const mapStateToProps = (state) => ({
    // news: [state.addNews.news],
    title: state.addNews.title,
    description: state.addNews.description,
    category: state.addNews.category,
    price: state.addNews.price,
    file:state.addNews.file,
    is_news: true
});

// // Cablage des actions
const mapDispatchToProps = (dispatch) => ({
    handleChangeField: (name, value) => {
      dispatch(changeAddNewsField(name,value));
    },
    handleAddNews: () => {
      dispatch(addNews());
    },
});

    
//   return {
//     // changeField : (value, name) => {
//     //   dispatch(changeAuthField(value, name));
//     // },
//     // handleAddNews : () => {
//     //   dispatch(handleAddNews( consoleLog('log depuis le container')));
//     // }
  
// }

export default connect(mapStateToProps, mapDispatchToProps)(AddNewsForm);