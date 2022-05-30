import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk"
import bucket from './modules/bucket';

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({bucket});
const store = createStore(rootReducer, enhancer);

export default store;