import React, { forwardRef, useState } from "react"
import styled from "styled-components";

const InputCustom = forwardRef(({title, currentValue, limit}, ref) => {
	const [value, setValue] = useState(currentValue ? currentValue : "")
	const inputChange = (e) => setValue(e.target.value);
	return (
		<Inner>
			<Label htmlFor="input-word">{title}</Label>
			<Input type="text" name="input-word" value={value} ref={ref} onChange={inputChange} maxLength={limit}/>
		</Inner>
	);
});

const Inner = styled.div`
	width: 240px;
	margin: 0 auto 10px auto;
`
const Input = styled.input`
	width: 240px;
	border-bottom: 1px solid #444;
`
const Label = styled.label`
	text-align: left;
	display: block;
	font-size: 12px;
`

export default InputCustom;