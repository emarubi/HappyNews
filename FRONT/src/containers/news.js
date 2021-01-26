import { connect } from 'react-redux';

// composant de présentation
import News from 'src/components/News';

const mapStateToProps = (state) => ({
  // on crée un boolen qui vaut vrai si on a des news sont dans la liste
  hasData: state.newsList.list.length > 0,
  list: state.newsList.list,
});
// mapDispatchToProps = cablage des actions (props de type fonction)
const mapDispatchToProps = (dispatch) => ({
  loadNews: () => {
    dispatch({ type: 'GET_NEWS' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
