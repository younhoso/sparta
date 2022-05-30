// user 이름을 넣자!
// 이름을 바꿔주자

const SET_NAME = "user/SET_NAME";
const SET_MESSAGE = "user/SET_MESSAGE";
const SET_SCORE = "user/SET_SCORE";

export const setName = (name) => {
	return {type: SET_NAME, name};
}

export const setMessage = (message) => {
	return {type: SET_MESSAGE, message}
}

export const setScore = (score) => {
	return {type: SET_SCORE, score};
}

const initialState = {
	user_score: 0,
	user_name: "",
	user_message: ""
}

export default function reducer(state = initialState, action = {}){
	switch(action.type){
		case SET_NAME: {
			return {...state, user_name: action.name}
		}
		case SET_MESSAGE: {
			return {...state, user_message: action.message}
		}
		case SET_SCORE: {
			return {...state, user_score: action.score}
		}
		default:
			return state;
	}
}