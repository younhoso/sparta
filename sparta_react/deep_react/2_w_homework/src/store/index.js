import {configureStore} from "@reduxjs/toolkit";
import tilReducer from "./til";

const store = configureStore({
	reducer: {
		til: tilReducer
	}
});

export {store}