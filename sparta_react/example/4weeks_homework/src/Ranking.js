import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function Ranking() {
	const history = useHistory();
	const user_data = useSelector((state) => state.ranking.ranking)
	const user_sort_data = user_data.sort((a, b) => b.score - a.score);

	return (
		<div>
			<Header>{user_sort_data.length}명의 사람들 중에서 당신은?</Header>
			{user_sort_data.map((el, idx) => {
				return (
					<List key={idx}>
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