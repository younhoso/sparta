import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Button = () => {
	const navigate = useNavigate();
	return (
		<ElButton onClick={() => {
			navigate("/write")
		}}/>
	);
}

const ElButton = styled.button`
  width: 40px;
	height: 40px;
	padding: 12px 0px;
	background-color: #212121;
	color: #ffffff;
	box-sizing: border-box;
	border: none;
	border-radius: 50%;
	position: fixed;
	right: 20px;
	bottom: 20px;
`

export default Button;