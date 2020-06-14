import { connect } from 'react-redux';
import {loginAction, logoutAction} from './redux/login.actions';
import Login from './login';

const mapStateToProps = state => ({
    isLoading: state.login.isLoading,
    userLoggedIn:state.login.userLoggedIn
});

const mapDispatchToProps = dispatch => ({
    setlogin: (userName) => dispatch(loginAction(userName)),
    userLogout: () => dispatch(logoutAction())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
