// Actions
const CREATE = 'bucket/CREATE';

const initalState = {
	list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
}

// Reducer
export default function reducer(state = initalState, action = {}){
	switch(action.type){
		case `${CREATE}`: {
			const new_bucket_list = [...state.list, action.bucket];
			return {list : new_bucket_list};
		}
		default: return state;
	}
}

// Action Creators
export function createBucket(bucket) {
	return { type: CREATE, bucket };
}