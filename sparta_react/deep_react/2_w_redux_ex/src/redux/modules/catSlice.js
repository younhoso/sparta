import {createSlice} from "@reduxjs/toolkit"

const catSlice = createSlice({
	name: 'cat',
	initialState: {
		name: "펄이 고양이",
		age: 100,
	},
	reducers: {
		changeName : (state, action) => {
			state.name = action.payload;
		},
		changeAge : (state, action) => {
			state.age = action.payload;
		}
	}
});

export const {changeName, changeAge} = catSlice.actions;
export default catSlice.reducer