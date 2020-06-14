import { connect } from 'react-redux';
import {logoutAction} from '../Login/redux/login.actions';
import Home from './home';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(logoutAction())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
