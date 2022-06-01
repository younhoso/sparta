import {Eco} from "@material-ui/icons";
import styled from 'styled-components';

const Spinner = (props) => {
	return (
		<Outer>
			<Eco style={{color: "#673ab7", fontSize: "150px"}}/>
		</Outer>
	);
}

const Outer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #e5d6ff;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`

export default Spinner