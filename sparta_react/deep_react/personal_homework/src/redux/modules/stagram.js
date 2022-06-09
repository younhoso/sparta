import {db} from "../../shared/firebase";
import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Actions Type
const LOAD = "stagram/LOAD";
const CREATE = "stagram/CREATE";

// Action Creators
export const loadStagram = (all_list) => ({type: LOAD, all_list})
export const createStagram = (data) => ({type: CREATE, data})

// 로딩 함수 middleware
export const loadStagramFB = () => {
	return async function (dispatch) {
		const stagram_data = await getDocs(collection(db, "posts"));
		let stagram_list = [];
		stagram_data.forEach((cur, idx) => {
			stagram_list = [...stagram_list, {id:cur.id, ...cur.data()}];
		});
		dispatch(loadStagram(stagram_list));
	}
}

// 컨텐츠 등록 함수 middleware
export const createStagramFB = (stagram) => {
	return async function (dispatch, getState) {
		const {values, setIsSubmitting, navigate} = stagram;
		const uploded_file = await uploadBytes(
      ref(getStorage(), `images/${values.imgFile.name}`), values.imgFile
    );
		const file_url = await getDownloadURL(uploded_file.ref)
		const info = JSON.parse(window.localStorage.getItem("user_info"))
		try {
			setIsSubmitting(true);
			const docRef = await addDoc(collection(db, "posts"), {
				id: info.id,
				name: info.name,
				user_id: info.user_id,
				image_url: file_url,
				text: values.content
			});
			const data = {id: docRef.id, ...stagram};
			dispatch(createStagram(data))
			navigate("/")
		} catch (error) {
			window.alert("앗! 이미지 업로드에 문제가 있어요!");
			console.log("앗! 이미지 업로드에 문제가 있어요!", error);
		} finally {
			setIsSubmitting(false);
		}
	}
}

// 컨텐츠 수정 함수 middleware

// 컨텐츠 삭제 함수 middleware

// initialState
const initalState = {
	list: []
}
// Reducer
const stagram = (state = initalState, action = {}) => {
	switch(action.type) {
		case LOAD: {
			return {...state, list: action.all_list};
		}

		case CREATE: {
			const new_stagram_list = [...state.list, action.data]
			return {list: new_stagram_list};
		}

		default:
			return state;
	}
}

export default stagram;