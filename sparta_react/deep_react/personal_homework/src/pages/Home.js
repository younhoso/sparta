import styled from 'styled-components';
import Card from "../components/Card";

const Home = () => {
	return (
		<HomeWrap>
			<Card />
			<Card />
		</HomeWrap>
	);
}

const HomeWrap = styled.div`
	max-width: 900px; 
	width: 100%;
	margin: 0 auto;
	padding: 0 20px;
	box-sizing: border-box;
`
export default Home;