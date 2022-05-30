//Actions
const LOAD = "language/LOAD";
const CREATE = "language/CREATE";
const UPDATE = "language/UPDATE";
const DELETE = "language/DELETE";

const initalState = {
	list: [
		{title: "단어", pinyin: "병음", meaning: "의미", example: "예문", 해석: "해석"},
		{title: "단어", pinyin: "병음", meaning: "의미", example: "예문", 해석: "해석"},
		{title: "단어", pinyin: "병음", meaning: "의미", example: "예문", 해석: "해석"}
	]
}

// Action Creators
export const loadLanguage = () => {

}

export const createLanguage = () => {

}

export const updateLanguage = () => {

}

export const deleteLanguage = () => {

}

// Reducer
const reducer = (state = initalState, action = {}) => {
	switch(action.type) {
		case LOAD:
			return state
		
		case CREATE:
			return state
		
		case UPDATE:
			return state
		
		case DELETE:
			return state
		
		default: 
			return state
	}
}


export default reducer;