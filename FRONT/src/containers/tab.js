import { connect } from 'react-redux';
import Tab from 'src/components/RetaillerP/Tabs';

const mapStateToProps = (state) => ({
  user: state.user.user
});

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
