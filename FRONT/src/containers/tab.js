import { connect } from 'react-redux';
import Tab from 'src/components/RetaillerP/Tabs';

const mapStateToProps = (state) => ({
  user: state.user.user,
  news: state.newsList.list,
});

export default connect(mapStateToProps)(Tab);
