import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function Ranking({name}) {
	const history = useHistory();
	const user_data = [
		{id: 1, score : 40, user_name: "소윤호1", message: "르탄아 안녕!"},
		{id: 2, score : 80, user_name: "소윤호2", message: "르탄아 안녕!"},
		{id: 3, score : 60, user_name: "소윤호3", message: "르탄아 안녕!"}
	]
	const user_sort_data = user_data.sort((a, b) => b.score - a.score);

	return (
		<div>
			<Header>000명의 사람들 중에서 당신은?</Header>
			{user_sort_data.map((el, idx) => {
				return (
					<List key={el.id}>
						<Item>
							<h1>{idx+1}등</h1>
							<div>
								<h3>{el.user_name}</h3>
								<p>{el.message}</p>
							</div>
						</Item>
					</List>
				)
			})}
			<Button onClick={() => {
				history.push("/");
			}}> 다시 하기 </Button>
		</div>
	);
}

const Item = styled.div`
	display: flex;
	border: 1px solid #888;
	padding: 16px;
	border-radius: 16px;
`
const Header = styled.div`
	width: 100vw;
	padding: 16px;
	position: fixed;
	top: 0;
	left: 0;
	border-bottom: 1px solid #888;
`
const List = styled.div`
	margin: 10px 0;
	&:nth-child(2){padding-top: 55px;}
`
const Button = styled.div`
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	display: inline-block;
	bottom: 30px;
	padding: 10px;
	border-radius: 10px;
	color: #fff;
	background-color: deeppink;
`
export default Ranking;