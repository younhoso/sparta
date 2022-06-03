import styled from 'styled-components';
import { useSelector } from "react-redux";
import Card from './Card';
import AddBtn from "./AddBtn";

function Home() {
	const words = useSelector((start) => start.language.list)

	return (
		<div>
			<Cards>
				{
					words.map((el, idx) => {
						return(
							<Card key={idx} el_objs={el}/>
						)
					})
				}
			</Cards>
			<AddBtn />
		</div>
	);
}

const Cards = styled.div`
	max-width: 1200px;
	margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  padding: 50px 0;
`;
export default Home;