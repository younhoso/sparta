import React, {useState} from 'react';
import {useParams, useHistory} from "react-router-dom"
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
			<button onClick={() => {
				history.goBack()
			}}>평점남기기</button>
		</div>
	);
}
export default Detail;