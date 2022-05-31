import {db} from "../../firebase";
import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore"

// Actions Type
const LOAD = "lang/LOAD";
const CREATE = "lang/CREATE";
const UPDATE = "lang/UPDATE";
const DELETE = "lang/DELETE";

// Action Creators
export const loadLanguage = (l_list) => {
	return {type: LOAD, l_list}
}

export const createLanguage = (language) => {
	return {type: CREATE, language};
}

export const updateLanguage = (language_id) => {
	return {type: UPDATE, language_id}
}

export const deleteLanguage = (language_id) => {
	return {type: DELETE, language_id};
}

// Middlewares
export const loadLanguageFB = () => {
	return async function (dispatch) {
		const language_data = await getDocs(collection(db, "language"));
		let language_list = [];
		language_data.forEach((cur, idx) => {
			language_list = [...language_list, {id:cur.id, ...cur.data()}];
		});
		dispatch(loadLanguage(language_list));
	}
};

export const createLanguageFB = (language) => {
	return async function (dispatch) {
		const docRef = await addDoc(collection(db, "language"), language)
		const language_data = {id: docRef.id, ...language};
	  dispatch(createLanguage(language_data))
	}
};

export const updateLanguageFB = (language_id) => {
	return async function (dispatch, getState) {
		const docRef = doc(db, "language", language_id)
		await updateDoc(docRef, {completed: true})

		const _language_list = getState().language.list;
		const language_index = _language_list.findIndex((b) => {
			return b.id === language_id;
		});

		dispatch(updateLanguage(language_index))
	}
}


const initalState = {
	list: [
		{title: "단어1", pinyin: "병음", meaning: "의미", example: "예문", commentary: "해석", completed: false}
	]
}

// Reducer
const language = (state = initalState, action = {}) => {
	switch(action.type) {
		case LOAD: {
			return {list: action.l_list};
		}

		case CREATE: {
			const new_language_list = [...state.list, action.language]
			return {list: new_language_list};
		}

		case UPDATE: {
			const newLanguageList = state.list.map((el, idx) => {
				if(parseInt(action.language_id) === idx){
					return {...el, completed: true}
				} else {
					return el
				}
			})
			return {list: newLanguageList}
		}

		case DELETE:
			return state;
		default:
			return state;
	}
}

export default language;