import React, {useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import {createLanguageFB} from '../redux/modules/language';
import InputCustom from "./InputCustom";

const FormInput = ({editing, nameTit}) => {
	const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
	const forRef = useRef(null);
	const fiveRef = useRef(null);
	const history = useHistory();
	const dispatch = useDispatch();
	useSelector((state) => console.log(state))
	
	const getDataForm = () => {
		const title = firstRef.current.value
		const pinyin = secondRef.current.value
    const definition = thirdRef.current.value
    const example_cn = forRef.current.value
    const example_ko = fiveRef.current.value;

		return {
			title,
      pinyin,
      definition,
      example_cn,
      example_ko,
		}
	};

	const addLanguage = (e) => {
		e.preventDefault()
		const inputData = getDataForm();
		const new_obj = {...inputData, completed: false}
		
		dispatch(createLanguageFB(new_obj))
		history.push('/')
	};

	return(
		<Wrap>
			<h2>단어 {nameTit}하기</h2>
			<form>
				<InputCustom title="단어" idText="word" ref={firstRef} limit={8}/>
				<InputCustom title="병음" idText="pinyin" ref={secondRef} limit={16}/>
				<InputCustom title="의미" idText="def" ref={thirdRef} limit={20}/>
				<InputCustom title="예문" idText="ex-cn" ref={forRef} limit={30}/>
				<InputCustom title="해석" idText="ex-ko" ref={fiveRef} limit={30}/>
				<Btn onClick={addLanguage}>저장하기</Btn>
			</form>
		</Wrap>
	);
}

const Wrap = styled.div`
	text-align: center;
	margin-top: 30px;
`
const Btn = styled.button`
	text-align: left;
	width: 100px;
	height: 40px;
	line-height:40px;
	background-color: #444;
	color: #fff;
	text-align: center;
	border-radius: 10px;
`

export default FormInput;