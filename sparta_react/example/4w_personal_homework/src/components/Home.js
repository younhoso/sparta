import { useEffect, useState } from "react";
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Card from './Card';
import AddBtn from "./AddBtn";

function Home() {
	const words = useSelector((start) => start.language.list)
	return (
		<div>
			<Cards>
				{
					words.map((el) => {
						const {title, pinyin} = el;
						return(
							<Card />
						)
					})
				}
			</Cards>
		</div>
	);
}

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  padding: 50px 0;
`;
export default Home;