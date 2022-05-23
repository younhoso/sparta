import React from 'react';
import {useHistory} from "react-router-dom"
import styled from 'styled-components';

function MyrateList({list}) {
	const cout = [0, 1, 2, 3, 4];
	const history =  useHistory()
	return (
		<div>
			{list.map((item, i) => {
				console.log(item)
				const {day, rate} = item;
				return (
					<div key={i}>{day}
					{cout.map((cur, idx) => {
						return (
							<WeekRates 
								key={idx}
								style={{
									color: rate > idx ? "yellowgreen":"rgb(221, 221, 221)"
								}}
								>★
							</WeekRates>
						);
					})}
					<ArrayBtn onClick={() => {
						history.push(`/detail/${day}`)
					}}>👉</ArrayBtn> 
					</div>
				)
			})}
		</div>
	);
}

const WeekRates = styled.div`
	display: inline-block;
	border-radius: 30px;
	margin: 5px;
`
const ArrayBtn = styled.button`
	border: none;
	background-color: transparent;
	font-size: 20px;
	cursor: pointer;
`

export default MyrateList;