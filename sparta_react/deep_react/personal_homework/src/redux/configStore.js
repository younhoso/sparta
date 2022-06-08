import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import stagram from "./modules/stagram";

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({stagram});
const store = createStore(rootReducer, enhancer);

export default store;