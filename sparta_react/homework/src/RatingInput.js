import React, {useState} from 'react';
import styled from 'styled-components';

const RATINGS = [1, 2, 3, 4, 5];

function Star({selected = false, item = 0, onSelect }){
	const className = `Rating-star ${selected ? 'selected' : ''}`;
	const handleClick = onSelect ? () => onSelect(item) : undefined

	return <Won onClick={handleClick} className={className}>★</Won>
}

function RatingInput({name, value, onChange}) {
	const [rating, setRating] = useState(value);

	const handleSelect = (nextValue) => onChange(name, nextValue);
	return (
		<ReviewTextBox>
			{RATINGS.map((item, idx) => (
				<Star 
					key={idx} 
					selected={value >= item}
					rating={rating}
					item={item}
					onSelect={handleSelect}/>
			))}
		</ReviewTextBox>
	);
}

const ReviewTextBox = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 50px;
`;

const Won = styled.span`
	display: inline-block;
	border-radius: 30px;
	margin: 5px;
	color: rgb(221, 221, 221);
	&.selected{
		color: yellowgreen;
	}
`;

export default RatingInput;