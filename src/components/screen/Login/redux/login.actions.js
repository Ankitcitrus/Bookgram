export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGOUT = 'LogOut';


export function loginAction(payload) {
    return {
        type: LOGIN_REQUEST,
        data: payload
    }
}

export function logoutAction(payload) {
    return {
        type: LOGOUT,
        data: payload
    }
}

