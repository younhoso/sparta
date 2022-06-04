import React, {useState} from 'react';
import {useParams, useHistory} from "react-router-dom"
import styled from 'styled-components';
import RatingInput from './RatingInput';

function Detail() {
	const parms = useParams();
	const history = useHistory();
	const [values, setValues] = useState({
		rating: 0
	});

	const handleChange = (name, value) => {
		setValues((prevValues) => ({
			...prevValues,
			[name]: value
		}));
	}

	return (
		<div>
			<span>{parms.name}</span>요일 평점 남기기
			<RatingInput
				name="rating"
        value={values.rating}
        onChange={handleChange}
			/>
			<Btn onClick={() => {
				history.goBack()
			}}>평점남기기</Btn>
		</div>
	);
}

const Btn = styled.button`
	border: none;
	background-color: dodgerblue;
	width: 160px;
	height: 40px;
	border-radius: 50px;
	color: #fff;
`
export default Detail;