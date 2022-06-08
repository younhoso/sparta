import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../shared/firebase";

const Header = () => {
	const navigate = useNavigate();
	const [is_login, setIsLogin] = useState(false);

  const loginCheck = async (user) => {
    if(user){
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
		navigate("/")
  };

  useEffect(() => {
    onAuthStateChanged(auth, loginCheck)
  },[])

	return (
		<HeaderInner>
			<div>
				<a href="/">Home</a>
				{ is_login 
					? (<div>
						  <Btn>내정보</Btn>
							<Btn>알림</Btn>
							<Btn onClick={() => signOut(auth)}>로그아웃</Btn>
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