import { connect } from 'react-redux';
import {loginAction11, logoutAction} from './redux/login.actions';
import Login from './login';

const mapStateToProps = state => ({
    isLoading: state.login.isLoading,
    userLoggedIn:state.login.userLoggedIn
});

const mapDispatchToProps = dispatch => ({
    setlogin: (userName) => dispatch(loginAction11(userName)),
    userLogout: () => dispatch(logoutAction())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
