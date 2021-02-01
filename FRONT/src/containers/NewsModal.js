import { connect } from 'react-redux';

// composant de présentation
import NewsModal from 'src/components/NewsModal';

const mapStateToProps = (state) => ({
  // on crée la data qui liste nos news
  news: state.news,
});
// mapDispatchToProps = cablage des actions (props de type fonction)
const mapDispatchToProps = (dispatch) => ({
  loadNewsById: () => {
    dispatch({ type: 'GET_ONE_NEWS' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsModal);
