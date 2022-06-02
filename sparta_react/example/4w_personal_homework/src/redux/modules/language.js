import {db} from "../../firebase";
import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore"

// Actions Type
const LOAD = "lang/LOAD";
const CHECK = "lang/CHECK";
const CREATE = "lang/CREATE";
const UPDATE = "lang/UPDATE";
const DELETE = "lang/DELETE";

// Action Creators
export const loadLanguage = (l_list) => {
	return {type: LOAD, l_list}
}

export const checkLanguage = (chek) => {
	return {type: CHECK, chek}
}

export const createLanguage = (language) => {
	return {type: CREATE, language};
}

export const updateLanguage = (language_idx) => {
	return {type: UPDATE, language_idx}
}

export const deleteLanguage = (language_idx) => {
	return {type: DELETE, language_idx};
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

export const checkLanguageFB = (language_id) => {
	return async function (dispatch, getState) {
		const _language_list = getState().language.list;
		const docRef = doc(db, "language", language_id)
		const language_index = _language_list.findIndex((b) => {
			return b.id === language_id;
		});

		if(_language_list[language_index].completed){
			await updateDoc(docRef, {completed: false})
		} else {
			await updateDoc(docRef, {completed: true})
		}
		dispatch(checkLanguage(language_index));
	}
}

export const createLanguageFB = (language) => {
	return async function (dispatch) {
		const docRef = await addDoc(collection(db, "language"), language)
		const language_data = {id: docRef.id, ...language};
	  dispatch(createLanguage(language_data))
	}
};

export const updateLanguageFB = (language_id) => {
	return async function (dispatch, getState) {
		if(!language_id){
			window.alert('ID가 없네요')
			return;
		}
		const docRef = doc(db, "language", language_id)
		const _language_list = getState().language.list;
		const language_index = _language_list.findIndex((b) => {
			return b.id === language_id;
		});
		dispatch(updateLanguage(language_index))
		await updateDoc(docRef, {completed: false})
	}
}

export const deleteBucketFB = (language_id) => {
	return async function(dispatch, getState) {
		if(!language_id){
			window.alert('ID가 없네요')
			return;
		}
		const docRef = doc(db, "language", language_id);
		await deleteDoc(docRef)
		const _language_list = getState().language.list;
		const language_index = _language_list.findIndex((b) => {
			return b.id === language_id;
		});
		dispatch(deleteLanguage(language_index))
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

		case CHECK: {
			const newLanguageList = state.list.map((el, idx) => {
				if(state.list[action.chek].id === el.id){
					if(state.list[action.chek].completed){
						return {...el, completed: false}
					}else{
						return {...el, completed: true}
					}
				}
				return el
			});
			return {...state, list: newLanguageList}
		}

		case CREATE: {
			const new_language_list = [...state.list, action.language]
			return {list: new_language_list};
		}

		case UPDATE: {
			const newLanguageList = state.list.map((el, idx) => {
				if(state.list[action.language_idx].id === el.id){
					return {...el, completed: true}
				}
				return el
			})
			return {...state, list: newLanguageList}
		}

		case DELETE: {
			const new_list = state.list.filter((el, idx) => {
				return parseInt(action.language_idx) !== idx;
			});

			return {list: new_list} ;
		}
		default:
			return state;
	}
}

export default language;