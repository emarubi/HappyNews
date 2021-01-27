import { connect } from 'react-redux';

// composant de présentation
import News from 'src/components/News';

const mapStateToProps = (state) => ({
  // on crée un boolen qui vaut vrai si on a des news sont dans la liste
  hasData: state.newsList.list.length > 0,
  // on crée la data qui liste nos news
  list: state.newsList.list,
  // on crée la data qui liste nos activités (= catégories dans notre page News)
  all_activities: state.all_activities,
});
// mapDispatchToProps = cablage des actions (props de type fonction)
const mapDispatchToProps = (dispatch) => ({
  loadNews: () => {
    dispatch({ type: 'GET_NEWS' });
  },
  loadActivities: () => {
    dispatch({ type: 'GET_ACTIVITIES' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
