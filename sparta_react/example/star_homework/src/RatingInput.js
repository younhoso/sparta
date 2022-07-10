import React, {useState} from 'react';
import styled from 'styled-components';

// const RATINGS = [1, 2, 3, 4, 5];
const RATINGS = Array.from( {length: 5}, (v, i) => i);
console.log(RATINGS)

function Star({selected = false, item = 0, onSelect }){
	const className = `Rating-star ${selected ? 'selected' : null}`;
	const handleClick = onSelect ? () => onSelect(item) : undefined

	return <Won onClick={handleClick} className={className}>★</Won>
}

function RatingInput({name, value, onChange}) {
	const [rating, setRating] = useState(value);

	const handleSelect = (nextValue) => onChange(name, nextValue);
	return (
		<ReviewTextBox>
			{
			RATINGS.map(function(item, idx){
				{console.log(value >=item)}
			  return(	<Star 
					key={idx} 
					selected={value >= item}
					rating={rating}
					item={item}
					onSelect={handleSelect}/>
				)
			})
		}
		</ReviewTextBox>
	);
}

const ReviewTextBox = styled.div`
  position: relative;
  text-align: center;
  padding: 10px 0;
`;

const Won = styled.span`
	display: inline-block;
	border-radius: 30px;
	margin: 5px;
	color: #9d9d9d;
	&.selected{
		color: yellowgreen;
	}
`;

export default RatingInput;