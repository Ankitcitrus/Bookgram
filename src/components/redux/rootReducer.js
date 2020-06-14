import { combineReducers } from 'redux';
import loginReducer from "../screen/Login/redux/login.reducer";




const rootReducer = combineReducers({
    //Append reducer here
    login:loginReducer
});



export default rootReducer;
