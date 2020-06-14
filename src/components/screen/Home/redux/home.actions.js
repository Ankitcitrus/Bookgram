export const LOGIN_REQUEST = 'LoginRequest'
export const LOGOUT = 'LogOut';

export function loginAction11(payload) {
    return {
        type: LOGIN_REQUEST,
        data: payload
    }
}

