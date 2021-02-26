import {APP_ACTIONS} from "../../actions/action";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isLoading: false
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_ACTIONS.SET_AUTH_DATA: {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            };
        }
        case APP_ACTIONS.SIGN_OUT: {
            return {
                ...state,
                isAuth: false
            };
        }
        default:
            return state;
    }
}

export const setAuthData = (id, login, email) => ({
    type: APP_ACTIONS.SET_AUTH_DATA,
    payload: {id, login, email}
})
export const signOut = () => ({
    type: APP_ACTIONS.SIGN_OUT,
})

export default authReducer