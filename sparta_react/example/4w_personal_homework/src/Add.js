import React, {useState} from "react"
import styled from "styled-components";

const Add = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const word = form["input-word"].value;
		const pinyin = form["input-pinyin"].value;
		const def = form["input-def"].value;
		const excn = form["input-ex-cn"].value;
		const exko = form["input-ex-ko"].value;
	}

	return(
		<Wrap>
			<h2>단어 추가하기</h2>
			<form onSubmit={handleSubmit}>
				<Inner>
					<Label htmlFor="input-word">단어</Label>
					<Input type="text" id="input-word" name="input-word" maxLength="8" />
				</Inner>
				<Inner>
					<Label htmlFor="input-pinyin">병음</Label>
					<Input type="text" id="input-pinyin" name="input-pinyin" maxLength="16" />
				</Inner>
				<Inner>
					<Label htmlFor="input-def">의미</Label>
					<Input type="text" id="input-def" name="input-def" maxLength="20" />
				</Inner>
				<Inner>
					<Label htmlFor="input-ex-cn">예문</Label>
					<Input type="text" id="input-ex-cn" name="input-ex-cn" maxLength="30" />
				</Inner>
				<Inner>
					<Label htmlFor="input-ex-ko">해석</Label>
					<Input type="text" id="input-ex-ko" name="input-ex-ko" maxLength="30" />
				</Inner>
				<Btn type="submit">저장하기</Btn>
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

export default Add;