import {legacy_createStore as createStore, combineReducers} from 'redux';

const app = document.getElementById("app");
const btn = document.querySelector(".btn");

const initialState = { //초기값 선언
	list: ["영화관 가기", "매일 책읽기", "수영 배우기"]
}

const CREATE = 'bucket/CREATE';

// Action Creators
const createBucket = (bucket) => {
	return {type: CREATE, bucket}
}
// Reducer
const modifier = (state = initialState, action) => {
  switch (action.type) {
    case CREATE : {
			const new_bucket_list = [...state.list, action.bucket];
			return {list : new_bucket_list};
		}
    default: return state;
  }
}

const rootReducer = combineReducers({modifier})

const onChange = () => {
  app.innerHTML = rootStore.getState().modifier.list
}

const rootStore = createStore(rootReducer)
const handleAdd = () => {
  rootStore.dispatch(createBucket("data1"))
}
app.innerHTML = rootStore.getState().modifier.list
rootStore.subscribe(onChange)
btn.addEventListener("click", handleAdd)