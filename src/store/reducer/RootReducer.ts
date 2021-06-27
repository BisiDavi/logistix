import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import { ModalReducer } from './ModalReducer';

const RootReducer = combineReducers({
    auth: AuthReducer,
    modal: ModalReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
