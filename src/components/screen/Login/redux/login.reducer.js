const initialState = {
    isLoading: false,
    userLoggedIn:''
};

export default function loginReducer(state = initialState, action) {
    switch ( action.type ) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                isLoading: true,
                userLoggedIn: action.data,

            };
            break;
        case 'LogOut':
            return {
                ...state,
                ...initialState,

            };
            break;
        default:
            return state;
    }
};

