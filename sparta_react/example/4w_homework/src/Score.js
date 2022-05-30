import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import {setScore} from './redux/modules/user';

function Score() {
	const history = useHistory();
	const dispatch = useDispatch();
	const quiz_name = useSelector(state => state.quiz.quiz_name);
	const quiz_list = useSelector(state => state.quiz.quiz_list);
	const userAnserList = useSelector(state => state.quiz.answerList);

	const _score = (100/quiz_list.length) * quiz_list.filter((q, idx) => {
				return q.answer === userAnserList[idx]
			}).length;
	const score = Math.round(_score);
	dispatch(setScore(score))

	return (
		<div>
			<h3>
				{quiz_name} 퀴즈에 대한 내 점수는 <br />
				{score}점
			</h3>

			<p>우와! 우린 참 친해요</p>
			<button onClick={() => {
				history.push("/message")
			}}>{quiz_name} 에게 한 마디</button>
		</div>
	);
}
export default Score;