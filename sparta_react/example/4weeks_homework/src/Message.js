import React, { useRef } from 'react';
import rtan from './scc_img01.png'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setMessage} from './redux/modules/user';
import {addRank} from "./redux/modules/ranking"

function Message() {
	const message_ref = useRef(null);
	const history = useHistory();
	const dispatch = useDispatch();
	const user_name = useSelector((state) => state.user.user_name)
	const quiz_name = useSelector((state) => state.quiz.quiz_name)
	const user_score = useSelector((state) => state.user.user_score)

	return (
		<div>
			<img src={rtan} />
			<h3>{quiz_name}에게 남기는 한 마디</h3>
			<input ref={message_ref} />
			<button onClick={() => {
				dispatch(setMessage(message_ref.current.value));
				dispatch(addRank({score : user_score, user_name: user_name, message: message_ref.current.value}))
				history.push("./ranking")
			}}>남기고 랭킹 보러가기</button>
		</div>
	);
}
export default Message;