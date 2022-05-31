import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk"
import language from './modules/language';

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({language});
const store = createStore(rootReducer, enhancer);

export default store;