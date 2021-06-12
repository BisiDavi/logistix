import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

const RootReducer = combineReducers({
    auth: AuthReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
