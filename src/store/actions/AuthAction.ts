import { SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESSFUL } from '@store/constants';

export const SignupSuccessfulAction = () => dispatch => {
	try{
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


export const SignupRequestAction = () => dispatch => {
	try{
		dispatch({
			type:SIGNUP_REQUEST
		})
	}catch(error){
		dispatch({
			type:SIGNUP_ERROR,
			payload:error
		})
	}
}
