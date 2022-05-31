import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import {updateLanguageFB} from './redux/modules/language';

const Card = () => {
  const history	= useHistory()
	const dispatch = useDispatch()
	const my_lists = useSelector((state) => state.language.list)

	return(
		<Inner>
			{my_lists.map((el, idx) => {
				return(<Item className={el.completed ? "is_on" : null} key={idx}>
					<h1>{el.title}</h1>
					<span>{el.pinyin}</span>
					<div>{el.meaning}</div>
					<div style={{color: "rgb(9, 132, 227)"}}>{el.example}</div>
					<div style={{color: "rgb(9, 132, 227)"}}>{el.commentary}</div>
					<InnerBtn>
						<button onClick={() => {
							dispatch(updateLanguageFB(el.id))
							history.push('/');
						}}>확인</button>
						<button onClick={() => {
							history.push(`/word/${el.id}/edit`);
						}}>수정</button>

						<button href="#0">삭제</button>
					</InnerBtn>
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
	padding: 10px;
	position: relative;
	&.is_on {
		background-color: #000;
		color: #fff;
	}
`

const InnerBtn = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
`

export default Card;