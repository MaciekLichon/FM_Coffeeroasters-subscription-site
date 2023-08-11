import { createStore, combineReducers } from 'redux';
import {initialState} from './initialState';
import orderReducer from './orderRedux';

// reducer

const subreducers = {
    order: orderReducer,
}

const reducer = combineReducers(subreducers);

// store

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
