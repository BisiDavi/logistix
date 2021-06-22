import { SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESSFUL } from '@store/constants';

const AuthReducer = (state = {
	signup:{newSignup:false, loading:false}
}, action) => {
    const { type, payload } = action;
		
    switch (type) {
        case 'login':
            return 'login';
        case SIGNUP_REQUEST:{
					return {...state, signup:{...state.signup, loading:true}}
				}
				case SIGNUP_SUCCESSFUL:{
					return {...state, signup:{...state.signup, newSignup:true, loading:false}}
				}
				case SIGNUP_ERROR:{
					return {...state, signup:{...state.signup, error:payload}}
				}
				default:
					return state;
    }
};

export default AuthReducer;
