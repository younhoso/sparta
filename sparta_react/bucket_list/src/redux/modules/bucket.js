// Actions
const CREATE = 'bucket/CREATE';
const DELETE = 'bucket/DELETE'

const initalState = {
	list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
}

// Action Creators
export function createBucket(bucket) {
	return { type: CREATE, bucket };
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
		case DELETE: {
			const new_list = state.list.filter((el, idx) => {
				return parseInt(action.bucket_index) !== idx;
			});
			return {list: new_list}
		}
		default: return state;
	}
};