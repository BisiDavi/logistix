import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/reducer/RootReducer';

export default function useRedux() {
    const dispatch = useDispatch();

    function selectState(stateNode) {
        const selectedState = useSelector(
            (state: RootState) => state[stateNode],
        );
        return selectedState;
    }

    return {
        dispatch,
        selectState,
    };
}
