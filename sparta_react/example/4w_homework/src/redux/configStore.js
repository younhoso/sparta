import {legacy_createStore as createStore, combineReducers} from "redux";
import quiz from "./modules/quiz";
import user from './modules/user';
import ranking from "./modules/ranking"

const rootReducer = combineReducers({ quiz, user, ranking});
const store = createStore(rootReducer);

export default store;