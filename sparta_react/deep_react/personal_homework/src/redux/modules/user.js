import {auth, db} from "../../shared/firebase";
import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, where, query} from "firebase/firestore"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { localStorage } from "../../shared/common";

// Actions Type
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// Action Creators
export const userLogOut = (user) => ({type: LOG_OUT, user})
export const userGetUser = (user) => ({type: GET_USER, user})
export const userSetUser = (user) => ({type: SET_USER, user})

// 로그인 함수 middleware
export const loginFB = (id, pwd) => {
	return async function (dispatch) {
		const user = await signInWithEmailAndPassword(auth, id, pwd)
		const user_docs = await getDocs(
			query(collection(db, "users"), where("user_id", "==", user.user.email))
		);
		let user_list = [];
		user_docs.forEach((el) => {
			user_list = [...user_list, {id:el.id, ...el.data()}]; //로그인 사용자 정보 확인
		});
	
		dispatch(userSetUser(user_list));
	}
};

// 회원가입 함수 middleware
export const signupFB = ({id, pwd, user_name}, navigate) => {
	return async function (dispatch) {
		const user = await createUserWithEmailAndPassword(auth, id, pwd);
		const docRef = await addDoc(collection(db, "users"), {
			user_id: user.user.email,
			name: user_name
		});
		const data = {
			id: docRef.id, 
			user_name: user_name,
			user_profile: "",
			uid: user.user.uid,
		};
		try {
			dispatch(userSetUser(data))
			navigate("/")
		} catch(error){
			console.log(error)
		}
	}
}

// 로그인 체크 함수 middleware

// 로그아웃 함수 middleware
export const logoutFB = (stagram) => {
	return async function (disabled) {

	}
}

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// Reducer
const handleUser = (state = initialState, action = {}) => {
	switch(action.type) {
		case SET_USER: {
			return {...state, user: action.user, is_login: true};
		}

		case LOG_OUT: {
			return state
		}

		case GET_USER: {
			return {...state};
		}

		default: 
			return state;
	}
}

export default handleUser;