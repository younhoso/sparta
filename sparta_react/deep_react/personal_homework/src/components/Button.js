import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import imgsrc from "../imgs/plus.svg"

const Button = () => {
	const navigate = useNavigate();
	return (
		<ElButton onClick={() => {
			navigate("/write")
		}}>
			<img src={imgsrc} />
		</ElButton>
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
	display: flex;
	justify-content: center;
	align-items: center;
	& img {
		width: 22px;
		height: 22px;
		line-height: 22px;
	}
`

export default Button;