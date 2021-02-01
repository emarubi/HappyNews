import { connect } from 'react-redux';
import Tab from 'src/components/RetaillerP/Tabs';

const mapStateToProps = (state) => ({
  content: state.user.content,
});

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
