import {
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESSFUL,
    SIGNUP_ERROR,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESSFUL,
} from '@store/constants';

export default function AuthReducer(
    state = {
        signup: { newSignup: false },
        loading: false,
        login: { loggedIn: false },
        error: null,
    },
    action,
) {
    const { type, payload } = action;

    switch (type) {
        case SIGNUP_REQUEST: {
            return { ...state, loading: true };
        }
        case SIGNUP_SUCCESSFUL: {
            return {
                ...state,
                loading: false,
                signup: { ...state.signup, newSignup: true },
            };
        }
        case SIGNUP_ERROR: {
            return { ...state, error: payload };
        }
        case LOGIN_REQUEST: {
            return { ...state, loading: true };
        }
        case LOGIN_SUCCESSFUL: {
            return { ...state, loading: false, login: { loggedIn: true } };
        }
        case LOGIN_ERROR: {
            return { ...state, error: payload };
        }
        default:
            return state;
    }
}
