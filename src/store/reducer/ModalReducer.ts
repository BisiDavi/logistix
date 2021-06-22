import { TOGGLE_MODAL, TOGGLE_MODAL_ERROR } from '@store/constants';

export const ModalReducer = (state={modalState:false}, action) => {
	const {type, payload} = action;

	switch(type){
		case TOGGLE_MODAL:{
			return {...state, modalState:payload }
		}
		case TOGGLE_MODAL_ERROR:{
			return {...state, error:payload}
		}
		default:
			return state;
	}
}

