import {legacy_createStore as createStore, combineReducers} from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const initialState = { //초기값 선언
	list: ["영화관 가기", "매일 책읽기", "수영 배우기"]
}

const countModifier = (state = initialState) => { //reducer는 data를 바꾸고 modify하는 걸 책임진다.
  return state // 만약에 "hello"를 리턴하면 이게 전체 서비스에 있는 data가 됩니다.
}

const countModifier2 = (state = "hollw") => { //reducer는 data를 바꾸고 modify하는 걸 책임진다.
  return state // 만약에 "hello"를 리턴하면 이게 전체 서비스에 있는 data가 됩니다.
}

const rootReducer = combineReducers({countModifier, countModifier2})

const countStore = createStore(rootReducer) //store는 data를 저장하는 곳!

console.log(countStore.getState())

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);