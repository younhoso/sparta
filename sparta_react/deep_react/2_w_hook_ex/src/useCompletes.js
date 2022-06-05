import {useState} from "react";

const useCompletes = (initial = "") => {
	// ref값 가져온 걸로,
	// state를 바꿔보자
	const [text, setText] = useState(initial);
	const changeText = (_ref) => {
		const value = _ref.current?.value;
		if(value && value !== ""){
			setText(value);
			_ref.current.value = "";
		}
	}
	return [text, changeText];
}

export default useCompletes