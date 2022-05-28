import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux'

function Progress() {
	const quiz_list = useSelector((state => state.quiz.quiz_list));
	const user_answer_list = useSelector((state) => state.quiz.answerList)

	return (
		<ProgressBar>
			<HighLight width={(user_answer_list.length/quiz_list.length)*100+"%"}/>
			<Dot />
		</ProgressBar>
	);
}

const ProgressBar = styled.div`
	background-color: #eee;
	width: 100%;
	height: 20px;
	display: flex;
	border-radius: 1rem;
`;

const HighLight = styled.div`
	background-color: slateblue;
	transition: width 1s ease-in-out;
	width: ${({width}) => width};
	height: 100%;
	border-radius: 1rem;
`;

const Dot = styled.div`
	width: 30px;
	height: 30px;
	background-color: #e2432e;
	border: 5px solid #e2432e;
	border-radius: 50%;
	margin: -10px 0 0 -20px;
`

export default Progress;