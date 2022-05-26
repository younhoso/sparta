import React from 'react';
import {useHistory} from "react-router-dom"
import styled from 'styled-components';

function MyrateList({aver, list, clear}) {
	const cout = [0, 1, 2, 3, 4];
	const history =  useHistory()
	return (
		<div>
			<h3>내 일주일은?</h3>
			{list.map((item, i) => {
				const {day, rate} = item;
				return (
					<div key={i}>{day}
					
					{cout.map((cur, idx) => {
						return (
							<WeekRates 
								key={idx}
								style={{
									color: rate > idx ? "yellowgreen":"#9d9d9d"
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
			<TextAver>평균 평점<br/>{aver}</TextAver>
			<Btn onClick={clear}>Reset</Btn>
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

const TextAver = styled.div`
  color: blue;
  padding: 9px;
  font-size: 25px;
  font-weight: bold;
`

const Btn = styled.button`
  width: 100px;
  height: fit-content;
  background-color: dodgerblue;
  border-radius: 50px;
  text-align: center;
  margin: 10px 0px 0px;
  border: none;
  color: #fff;
  padding: 16px 20px;
`

export default MyrateList;