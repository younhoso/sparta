import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, apiKey } from "../shared/firebase";
import { useSelector, useDispatch } from "react-redux";
import { logoutFB } from "../redux/modules/user";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const is_login = useSelector((state) => state.user.is_login);
	console.log(is_login)

	const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
	const is_session = sessionStorage.getItem(_session_key)? true : false;
	console.log(is_session);

	return (
		<HeaderInner>
			<div>
				<a href="/">Home</a>
				{ is_login && is_session
					? (<div>
						  <Btn>내정보</Btn>
							<Btn>알림</Btn>
							<Btn onClick={() => dispatch(logoutFB(navigate))}>로그아웃</Btn>
						</div>) 
					: (
						<div>
							<Btn onClick={() => {
								navigate("/signup")
							}}>회원가입</Btn>
							<Btn onClick={() => {
								navigate("/login")
							}}>로그인</Btn>
						</div>
					)
				}
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
	width: 15vw;
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