import React, {useState} from "react"
import styled from "styled-components";

const Card = () => {
	const [newArr, setNewArr] = useState([
		{title: "단어", pinyin: "병음", meaning: "의미", example: "예문", 해석: "해석", completed: true},
		{title: "단어", pinyin: "병음", meaning: "의미", example: "예문", 해석: "해석", completed: false},
		{title: "단어", pinyin: "병음", meaning: "의미", example: "예문", 해석: "해석", completed: false},
		{title: "단어", pinyin: "병음", meaning: "의미", example: "예문", 해석: "해석", completed: false},
		{title: "단어", pinyin: "병음", meaning: "의미", example: "예문", 해석: "해석", completed: false},
	])

	return(
		<Inner>
			{newArr.map((el, idx) => {
				console.log(el.completed)
				return(<Item className={el.completed ? "is_on" : null} key={idx}>
					<h1>{el.title}</h1>
					<span>[{el.pinyin}]</span>
					<div>{el.meaning}</div>
					<div>{el.example}</div>
					<div>{el.해석}</div>
				</Item>)
			})}
		</Inner>
	)
};

const Inner = styled.div`
	display: flex;
	flex-wrap: wrap;
	-webkit-box-pack: start;
	justify-content: flex-start;
	width: 100%;
	max-width: 1200px;
	margin: 60px auto 0px;
	gap: 20px;
`

const Item = styled.div`
	width: calc((100% - 40px) / 3);
	border-radius: 8px;
	border: 2px solid #000;
	&.is_on {
		background-color: #000;
		color: #fff;
	}
`

export default Card;