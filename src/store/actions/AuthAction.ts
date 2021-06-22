import { SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESSFUL } from '@store/constants';

export const SignupAction = () => dispatch => {
	try{
		dispatch({
			type:SIGNUP_REQUEST
		})
		dispatch({
			type:SIGNUP_SUCCESSFUL
		})
	}catch(error){
		dispatch({
			type:SIGNUP_ERROR,
			payload:error
		})
	}
}
