const initialState = {
    isLoading: false,
    userLoggedIn:''
};

export default function homeReducer(state = initialState, action) {
    switch ( action.type ) {
        case 'LoginRequest':
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

