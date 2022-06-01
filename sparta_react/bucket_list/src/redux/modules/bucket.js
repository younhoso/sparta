import {db} from "../../firebase";
import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore"

// Actions
const LOAD = 'bucket/LOAD'
const CREATE = 'bucket/CREATE';
const UPDATE = 'bucket/UPDATE';
const DELETE = 'bucket/DELETE';
const LOADED = 'bucket/LOADED';

const initalState = {
	is_loaded: false,
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

export function isLoaded(loaded) {
	return {type: LOADED, loaded};
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
		dispatch(isLoaded(false));
		const docRef	= await addDoc(collection(db, "bucket"), bucket);
		const bucket_data = {id: docRef.id, ...bucket};
		dispatch(createBucket(bucket_data))
	}
};

export const updateBucketFB = (bucket_id) => {
	return async function (dispatch, getState) {
		if(!bucket_id){
			window.alert('ID가 없네요')
			return;
		}
		dispatch(isLoaded(false))
		const docRef = doc(db, "bucket", bucket_id);
		await updateDoc(docRef, {completed: true});

		const _bucket_list = getState().bucket.list;
		const bucket_index = _bucket_list.findIndex((b) => {
			return b.id === bucket_id;
		});

		dispatch(updateBucket(bucket_index))
	}
};

export const deleteBucketFB = (bucket_id) => {
	return async function (dispatch, getState) {
		if(!bucket_id){
			window.alert('ID가 없네요')
			return;
		}
		const docRef = doc(db, "bucket", bucket_id);
		await deleteDoc(docRef)

		const _bucket_list = getState().bucket.list;
		const bucket_index = _bucket_list.findIndex((b) => {
			return b.id === bucket_id;
		});

		dispatch(deleteBucket(bucket_index))
	}
}

// Reducer
export default function reducer(state = initalState, action = {}){
	switch(action.type){
		case LOAD: {
			return {list: action.bucket_list, is_loaded: true}
		}

		case CREATE: {
			const new_bucket_list = [...state.list, action.bucket];
			return {...state, list : new_bucket_list, is_loaded: true};
		}

		case UPDATE: {
			const newBucketList = state.list.map((el, idx) => {
				if(parseInt(action.bucket_index) === idx){
					return {...el, completed: true}
				} else {
					return el
				}
			})
			return {...state, list: newBucketList, is_loaded: true}
		}

		case DELETE: {
			const new_list = state.list.filter((el, idx) => {
				return parseInt(action.bucket_index) !== idx;
			});
			return {...state, list: new_list}
		}

		case LOADED: {
			return {...state, is_loaded: action.loaded}
		}

		default: return state;
	}
};