import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import RootReducer from './reducer/RootReducer';

const middleware = [thunk];

const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
