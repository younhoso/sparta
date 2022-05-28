import React from 'react';
import rtan from './scc_img01.png'
import { useHistory } from 'react-router-dom';
function Message({name}) {
	const history = useHistory();
	return (
		<div>
			<img src={rtan} />
			<h3>{name}에게 남기는 한 마디</h3>
			<input />
			<button onClick={() => {
				history.push("./ranking")
			}}>남기고 랭킹 보러가기</button>
		</div>
	);
}
export default Message;