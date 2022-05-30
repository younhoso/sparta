import {db} from "../../firebase";
import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore"

// Actions
const LOAD = 'bucket/LOAD'
const CREATE = 'bucket/CREATE';
const UPDATE = 'bucket/UPDATE';
const DELETE = 'bucket/DELETE';

const initalState = {
	list: [
		{text : "영화관 가기", completed: false},
		{text : "매일 책읽기", completed: false},
		{text : "수영 배우기", completed: false},
		{text : "코딩하기", completed: false}
	]
}

// Action Creators
export function loadBucket(bucket_list) {
	return {type: LOAD, bucket_list }
}

export function createBucket(bucket) {
	return { type: CREATE, bucket };
}

export function updateBucket(bucket_index) {
	return {type: UPDATE, bucket_index}
}

export function deleteBucket(bucket_index) {
	return {type: DELETE, bucket_index};
}

// Middlewares
export const loadBucketFB = () => {
	return async function (dispatch) {
		const bucket_data = await getDocs(collection(db, "bucket"));
		let bucket_list = [];
		bucket_data.forEach((cur, idx) => {
			bucket_list = [...bucket_list, {id:cur.id, ...cur.data()}];
		})
		dispatch(loadBucket(bucket_list));
	}
};

export const createBucketFB = (bucket) => {
	return async function (dispatch) {
	 const docRef	= await addDoc(collection(db, "bucket"), bucket);
	 const bucket_data = {id: docRef.id, ...bucket};
	 dispatch(createBucket(bucket_data))
	}
}

// Reducer
export default function reducer(state = initalState, action = {}){
	switch(action.type){
		case LOAD: {
			return {list: action.bucket_list}
		}

		case CREATE: {
			const new_bucket_list = [...state.list, action.bucket];
			return {list : new_bucket_list};
		}

		case UPDATE: {
			const newBucketList = state.list.map((el, idx) => {
				if(parseInt(action.bucket_index) === idx){
					return {...el, completed: true}
				} else {
					return el
				}
			})
			return {list: newBucketList}
		}

		case DELETE: {
			const new_list = state.list.filter((el, idx) => {
				return parseInt(action.bucket_index) !== idx;
			});
			return {list: new_list}
		}
		default: return state;
	}
};