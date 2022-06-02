import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import {checkLanguageFB, deleteBucketFB} from '../redux/modules/language';
import menu from "../imgs/menu.svg"

const Card = () => {
  const history	= useHistory()
	const dispatch = useDispatch()
	const my_lists = useSelector((state) => state.language.list)
	const toggle = (e) => {
		e.target.nextSibling.style.display = "block";
	}
	return(
		<Inner>
			{my_lists.map((el, idx) => {
				return(<Item className={el.completed ? "is_on" : null} key={idx}>
					<H1>{el.title}</H1>
					<span>{el.pinyin}</span>
					<div>{el.meaning}</div>
					<div style={{color: "rgb(9, 132, 227)"}}>{el.example}</div>
					<div style={{color: "rgb(9, 132, 227)"}}>{el.commentary}</div>
					<ImgMenu onClick={toggle} src={menu} />
					<InnerBtn>
						<Btn onClick={() => {
							dispatch(checkLanguageFB(el.id))
						}}>체크</Btn>
						<Btn onClick={() => {
							history.push(`/word/${el.id}/edit`);
						}}>수정</Btn>
						<Btn onClick={() => {
							dispatch(deleteBucketFB(el.id))
						}}>삭제</Btn>
					</InnerBtn>
				</Item>)
			})}
		</Inner>
	)
};

const H1 = styled.h1`
	font-size: 24px;
	font-weight: 600;
`

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
const ImgMenu = styled.img`
	position: absolute;
	top: 15px;
	right: 10px;
`
const InnerBtn = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 2;
	border: 1px solid #000;
	border-radius: 10px;
	background-color: #fff;
	display: none;
`
const Btn = styled.button`
	display: block;
	padding: 8px;
	border-bottom: 1px solid #000;
	&:last-child {
		border-bottom: none;
	}
`
const Item = styled.div`
	width: calc((100% - 40px) / 3);
	border-radius: 8px;
	border: 1px solid #000;
	box-shadow: 0 0.1em 0.4em rgb(0 0 0 / 30%);
	padding: 10px;
	position: relative;
	transition: transform 0.07s ease-in-out;
	&:hover {
		transform: translateY(-6px);
	}
	&.is_on {
		background-color: #000;
		color: #fff;
		${InnerBtn}{
			background-color: #000;
		}
	}
`

export default Card;