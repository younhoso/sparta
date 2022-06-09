import {legacy_createStore as createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import stagram from "./modules/stagram";
import user from "./modules/user";

const middlewares = [thunk];

const rootReducer = combineReducers({stagram, user});
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;