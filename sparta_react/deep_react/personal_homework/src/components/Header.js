import styled from "styled-components"
import {useNavigate} from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	return (
		<HeaderInner>
			<div>
				<a href="/">Home</a>
				<div>
					<Btn onClick={() => {
						navigate("/signup")
					}}>회원가입</Btn>
					<Btn onClick={() => {
						navigate("/login")
					}}>로그인</Btn>
				</div>
			</div>
		</HeaderInner>
	);
}

const HeaderInner = styled.div`
	border-bottom: 1px solid #e4e8eb;
	margin-bottom: 20px;
	& > div {
		max-width: 900px; 
		width: 100%;
		margin: 0 auto;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`

const Btn = styled.button`
	width: 100px;
	height: 30px;
	line-height: 30px;
	margin: 0 10px;
	background-color: #333;
	color: #fff;
	font-size: 12px;
	border-radius: 10px;
	border: none;
	cursor: pointer;
	&:last-child{margin: 0}
`
export default Header;