import React, { useState } from 'react';
import styled from "styled-components"
import { useDispatch } from "react-redux";

import { emailCheck } from '../shared/common';
import { signupFB } from "../redux/modules/user"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const [id, setId] = useState("");
	const [pwd, setPwd] = useState("");
	const [pwd_check, setPwdCheck] = useState("");
	const [user_name, setUserName] = useState("");
	const dispatch = useDispatch();
  const navigate = useNavigate();

	const signupFu = async () => {
		if (!id || !pwd || !user_name) {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }

    if(!emailCheck(id)){
      window.alert('이메일 형식이 맞지 않습니다!');
      return;
    }

		if (pwd !== pwd_check) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }
		const new_obj = {id, pwd, user_name}
		dispatch(signupFB(new_obj, navigate))
  }


	return (
		<SignupInner>
			<H2>회원가입</H2>
			<label>
				<p>아이디(이메일):</p> 
				<Input onChange={(e) => {
					setId(e.target.value);
				}}/>
			</label>
			<label>
				<p>비밀번호:</p>
				<Input type="password" onChange={(e) => {
					setPwd(e.target.value)
				}}/>
			</label>
			<label>
				<p>비밀번호 확인:</p> 
				<Input type="password" onChange={(e) => {
					setPwdCheck(e.target.value)
				}}/>
			</label>
			<label>
				<p>이름:</p> 
				<Input onChange={(e) => {
					setUserName(e.target.value)
				}}/>
			</label>
			
			<Btn onClick={signupFu}>회원가입</Btn>
		</SignupInner>
	);
}
const SignupInner = styled.div`
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

export default Signup;