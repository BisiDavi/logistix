import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/reducer/RootReducer';

const useRedux = () => {
	const dispatch = useDispatch()

	const selectState = (stateNode) => {
		const selectedState = useSelector((state:RootState) => state[stateNode])
		return selectedState;

	}

	return {
		dispatch,
		selectState
	}

}

export default useRedux;