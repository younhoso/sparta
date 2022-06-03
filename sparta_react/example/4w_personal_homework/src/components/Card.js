import React, { forwardRef, useRef } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import menu from "../imgs/menu.svg"

import { updateLanguageFB, deleteBucketFB } from "../redux/modules/language";

const Card = forwardRef(({ el_objs }, ref) => {
	const { id, title, pinyin, definition, example_cn, example_ko, completed } = el_objs;
	const el = useRef(null);
	const dispatch = useDispatch()

	 // toggle 하는 함수
	const toggleCheck = (objs) => {
		dispatch(updateLanguageFB(objs));
	};

	const menuCheck = () => {
		el.current.nextSibling.classList.add('on')
	};
	
	return(
		<Item className={completed ? "is_on" : null} ref={ref}>
			<div>
					<H1>{title}</H1>
					<span>[{pinyin}]</span>
					<div style={{color: "rgb(9, 132, 227)"}}>{definition}</div>
					<div style={{color: "rgb(9, 132, 227)"}}>{example_cn}</div>
					<div style={{color: "rgb(9, 132, 227)"}}>{example_ko}</div>
					<ImgMenu src={menu} onClick={menuCheck} ref={el}/>
					<InnerBtn>
						<Btn onClick={() => {toggleCheck(el_objs)}}>체크</Btn>
						<Btn>수정</Btn>
						<Btn onClick={() => dispatch(deleteBucketFB(id))}>삭제</Btn>
					</InnerBtn>
			</div>
		</Item>
	)
});

const H1 = styled.h1`
	font-size: 24px;
	font-weight: 600;
	margin: 5px 0;
`
const ImgMenu = styled.img`
	position: absolute;
	top: 15px;
	right: 10px;
	cursor: pointer;
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
	&.on {
		display: block;
	}
`
const Btn = styled.button`
	padding: 8px;
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
	background-color: #fff;
	&:hover {
		transform: translateY(-6px);
	}
	&.is_on {
		background-color: #444;
		color: #fff;
		${InnerBtn}{
			background-color: #444;
			border: 1px solid #fff;
		}
	}
`

export default Card;