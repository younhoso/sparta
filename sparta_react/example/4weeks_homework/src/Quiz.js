import React, {useState, useEffect} from "react";
import styled, { keyframes } from "styled-components"
import {useHistory} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux';
import rtan from "./scc_img01.png";
import {addAnswer} from "./redux/modules/quiz"
import Progress from "./Progress";

const Quiz = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const quiz_list = useSelector((state) => state.quiz.quiz_list)
	const answerList = useSelector((state) => state.quiz.answerList)

	const setAnswer = (user_answer) => {
		dispatch(addAnswer(user_answer))
	}

	const handleLoad = () => {
		if(answerList.length === quiz_list.length) {
			history.push("/score")
			return;
		}
	}
	
	useEffect(() => {
		handleLoad()
	},[answerList]);

	if (answerList.length === quiz_list.length) {
    return null;
  }

  return (
    <div>
			<Progress />
			<p>{answerList.length + 1}번 문제</p>
			<h3>{quiz_list[answerList.length].question}</h3>
			<img src={rtan}/>

			<div>
				<Btn onClick={() => {
					setAnswer(true)
				}}>O</Btn>
				<Btn onClick={() => {
					setAnswer(false)
				}}>X</Btn>
			</div>
    </div>
  );
};

const Btn = styled.button`
	width: 50px;
	height: 50px;
	margin: 16px;
`

export default Quiz;