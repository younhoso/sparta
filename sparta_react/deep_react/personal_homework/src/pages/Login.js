import { useState } from "react";
import styled from "styled-components"
import { useDispatch } from "react-redux";

const Login = () => {

	return (
		<LoginInner>
				<H2>로그인</H2>
				<label>
					<p>아이디</p>
					<Input type="text" placeholder="아이디를 입력해주세용!" value="" />
				</label>
				<label>
					<p>비밀번호</p>
					<Input type="text" placeholder="비밀번호를 입력해주세용!" value="" />
				</label>
				<Btn>로그인하기</Btn>
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