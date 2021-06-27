import {
    SIGNUP_ERROR,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESSFUL,
    LOGIN_REQUEST,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
} from '@store/constants';

export function SignupSuccessfulAction() {
    return function (dispatch) {
        try {
            dispatch({
                type: SIGNUP_SUCCESSFUL,
            });
        } catch (error) {
            dispatch({
                type: SIGNUP_ERROR,
                payload: error,
            });
        }
    };
}

export function SignupRequestAction() {
    return function (dispatch) {
        try {
            dispatch({
                type: SIGNUP_REQUEST,
            });
        } catch (error) {
            dispatch({
                type: SIGNUP_ERROR,
                payload: error,
            });
        }
    };
}

export function SigninRequestAction() {
    return function (dispatch) {
        try {
            dispatch({
                type: LOGIN_REQUEST,
            });
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error,
            });
        }
    };
}

export function SigninSuccessfulAction() {
    return function (dispatch) {
        try {
            dispatch({
                type: LOGIN_SUCCESSFUL,
            });
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error,
            });
        }
    };
}
