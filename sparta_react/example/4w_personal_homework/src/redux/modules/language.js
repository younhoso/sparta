import {db} from "../../firebase";
import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore"

// Actions Type
const LOAD = "lang/LOAD";
const COMPLETE = "lang/COMPLETE"
const CREATE = "lang/CREATE";
const UPDATE = "lang/UPDATE";
const DELETE = "lang/DELETE";

// Action Creators
export const loadLanguage = (all_list) => ({type: LOAD, all_list})
export const createLanguage = (data) => ({type: CREATE, data})
export const updateLanguage = (id) => ({type: COMPLETE, id})
export const deleteLanguage = (id) => ({type: DELETE, id})

// 로딩 함수
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

// 새로운 단어 등록 함수
export const createLanguageFB = (language) => {
	return async function (dispatch) {
		const docRef = await addDoc(collection(db, "language"), language)
		const data = {id: docRef.id, ...language};
	  dispatch(createLanguage(data))
	}
};

// 토글 함수
export const updateLanguageFB = (datas) => {
	return async function (dispatch) {
		const docRef = doc(db, "language", datas.id)
		await updateDoc(docRef, {completed: !datas.completed});
		dispatch(updateLanguage(datas.id))
	}
}

// 단어 삭제 함수
export const deleteBucketFB = (id) => {
	return async function(dispatch) {
		const docRef = doc(db, "language", id);
		await deleteDoc(docRef)
		dispatch(deleteLanguage(id))
	}
}


const initalState = {
	list: []
}

// Reducer
const language = (state = initalState, action = {}) => {
	switch(action.type) {
		case LOAD: {
			return {...state, list: action.all_list};
		}

		case COMPLETE:{
      const new_word_list = state.list.map((el) =>
				el.id === action.id ? { ...el, completed: !el.completed } : el
      );
      return { ...state, list: new_word_list};
		}

		case CREATE: {
			const new_language_list = [...state.list, action.language]
			return {list: new_language_list};
		}

		case UPDATE: {
			const newLanguageList = state.list.map((el) => 
				action.id === el.id ? {...el, completed: !el.completed} : el
			)
			return {...state, list: newLanguageList}
		}

		case DELETE: {
			const new_list = state.list.filter((el) => el.id !== action.id);
			return {...state, list: new_list} ;
		}
		default:
			return state;
	}
}

export default language;