// Actions
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
export function createBucket(bucket) {
	return { type: CREATE, bucket };
}

export function updateBucket(bucket_index) {
	return {type: UPDATE, bucket_index}
}

export function deleteBucket(bucket_index) {
	return {type: DELETE, bucket_index};
}

// Reducer
export default function reducer(state = initalState, action = {}){
	switch(action.type){
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