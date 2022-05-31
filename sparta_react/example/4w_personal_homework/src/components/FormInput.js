import React, {useRef } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import {createLanguageFB} from '../redux/modules/language';

const FormInput = ({nameTit}) => {
	const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
	const forRef = useRef(null);
	const fiveRef = useRef(null);
	const history = useHistory();
	const dispatch = useDispatch();

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
				<Inner>
					<Label htmlFor="input-word">단어</Label>
					<Input type="text" id="input-word" name="input-word" maxLength="8" ref={firstRef}/>
				</Inner>
				<Inner>
					<Label htmlFor="input-pinyin">병음</Label>
					<Input type="text"  id="input-pinyin" name="input-pinyin" maxLength="16" ref={secondRef}/>
				</Inner>
				<Inner>
					<Label htmlFor="input-def">의미</Label>
					<Input type="text" id="input-def" name="input-def" maxLength="20" ref={thirdRef}/>
				</Inner>
				<Inner>
					<Label htmlFor="input-ex-cn">예문</Label>
					<Input type="text" id="input-ex-cn" name="input-ex-cn" maxLength="30" ref={forRef}/>
				</Inner>
				<Inner>
					<Label htmlFor="input-ex-ko">해석</Label>
					<Input type="text" id="input-ex-ko" name="input-ex-ko" maxLength="30" ref={fiveRef}/>
				</Inner>
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