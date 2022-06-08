import { useState } from "react";
import { auth, db } from "../shared/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, where, query, collection } from "firebase/firestore"
import styled from "styled-components"

const Login = () => {
	const [id, setId] = useState("");
	const [pwd, setPwd] = useState("");
	
	const loginFu = async () => {
		const user = await signInWithEmailAndPassword(auth, id, pwd)
		const user_docs = await getDocs(
			query(collection(db, "users"), where("user_id", "==", user.user.email))
		);
		
		user_docs.forEach((el) => {
			const {user_id, name} = el.data(); //로그인 사용자 정보 확인

		})
	}
	return (
		<LoginInner>
				<H2>로그인</H2>
				<label>
					<p>아이디</p>
					<Input type="text" placeholder="아이디(이메일)를 입력해주세용!" onChange={(e) => {
						setId(e.target.value)
					}}/>
				</label>
				<label>
					<p>비밀번호</p>
					<Input type="password" placeholder="비밀번호를 입력해주세용!" onChange={(e) => {
						setPwd(e.target.value)
					}}/>
				</label>
				<Btn onClick={loginFu}>로그인하기</Btn>
		</LoginInner>
	);
}

const LoginInner = styled.div`
	max-width: 900px; 
	width: 100%;
	padding: 0 20px;
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
`

const Input = styled.input`
	width: 100%;
	min-width: 230px;
	box-sizing: border-box;
	padding: 10px;
	border: 2px solid #333;
	border-radius: 3px;
	margin-bottom: 20px;
`
const H2 = styled.h2`
	font-size: 26px;
	font-weight: 600;
	margin-bottom: 10px;
`

const Btn = styled.button`
	width: 100%;
	background-color: #333;
	color: #fff;
	padding: 10px;
`

export default Login;