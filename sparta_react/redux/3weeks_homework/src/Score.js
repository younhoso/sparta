import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

function Score({name}) {
	const history = useHistory();
	const quiz_list = useSelector(state => state.quiz.quiz_list);
	const userAnserList = useSelector(state => state.quiz.answerList);

	const _score = (100/quiz_list.length) * quiz_list.filter((q, idx) => {
				return q.answer === userAnserList[idx]
			}).length;
	const score = Math.round(_score);
	history.push("/score");
	return (
		<div>
			<h3>
				{name} 퀴즈에 대한 내 점수는 <br />
				{score}점
			</h3>

			<p>우와! 우린 참 친해요</p>
			<button>{name}에게 한 마디</button>
		</div>
	);
}
export default Score;