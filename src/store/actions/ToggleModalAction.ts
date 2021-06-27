import { TOGGLE_MODAL, TOGGLE_MODAL_ERROR } from '@store/constants';

export function ToggleModalAction(payload) {
    return function (dispatch) {
        try {
            dispatch({
                type: TOGGLE_MODAL,
                payload,
            });
        } catch (error) {
            dispatch({
                type: TOGGLE_MODAL_ERROR,
                payload: error,
            });
        }
    };
}
