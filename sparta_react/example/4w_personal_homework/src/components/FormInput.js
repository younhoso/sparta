import React, {useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

import {createLanguageFB} from '../redux/modules/language';

const FormInput = ({editing, nameTit}) => {
	const [newArr, setNewArr] = useState(["단어","병음","의미","예문","해석"])
	const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
	const forRef = useRef(null);
	const fiveRef = useRef(null);
	const history = useHistory();
	const dispatch = useDispatch();
	const param = useParams();
	
	const addLanguage = (e) => {
		e.preventDefault()
		const addData = {title: firstRef.current.value, pinyin: secondRef.current.value, meaning: thirdRef.current.value, example: forRef.current.value, commentary: fiveRef.current.value, completed: false}
		dispatch(createLanguageFB(addData))
		history.push('/')
	}

	return(
		<Wrap>
			<h2>단어 {nameTit}하기</h2>
			<form>
				{
					newArr.map((el, idx) => {
						if(editing === param.id){
							return(
								<Inner key={idx}>
									<Label htmlFor="input-word">{el}</Label>
									<Input type="text" value={"dse1"} name="input-word" maxLength="8" ref={firstRef}/>
								</Inner>
							)
						}
					})
				}
				<Btn onClick={addLanguage}>저장하기</Btn>
			</form>
		</Wrap>
	);
}

const Wrap = styled.div`
	text-align: center;
	margin-top: 30px;
`
const Inner =styled.div`
	width: 240px;
	margin: 0 auto 10px auto;
`
const Input = styled.input`
	width: 240px;
	border-bottom: 1px solid #000;
`
const Label = styled.label`
	text-align: left;
	display: block;
	font-size: 12px;
`
const Btn = styled.button`
	text-align: left;
	width: 100px;
	height: 40px;
	line-height:40px;
	background-color: #000;
	color: #fff;
	text-align: center;
	border-radius: 10px;
`

export default FormInput;