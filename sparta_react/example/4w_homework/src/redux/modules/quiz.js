const ADD_ANSWER = "quiz/ADD_ANSWER";

export const addAnswer = (user_answer) => {
	return {type: ADD_ANSWER, user_answer}
}

const initialState = {
  quiz_name: "르탄이",
	quiz_list: [
		{question: "르탄이 1살이다.", answer: false},
		{question: "르탄이 2살이다.", answer: false},
		{question: "르탄이 3살이다.", answer: true},
	],
	answerList: [],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_ANSWER: {
      const newAnswerList = [...state.answerList, action.user_answer];
      return {...state, answerList: newAnswerList};
    }

    default:
      return state;
  }
}