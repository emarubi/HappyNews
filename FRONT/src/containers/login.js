import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { changeAuthField, handleLogin } from 'src/redux/actions';

const mapStateToProps = (state) => ({
  // to get state parameters
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.logged,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    dispatch(changeAuthField(value, name));
  },
  handleLogin: () => {
    dispatch(handleLogin(console.log('je suis dans le container')));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
