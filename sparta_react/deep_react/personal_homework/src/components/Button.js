import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../shared/firebase";
import imgsrc from "../imgs/plus.svg"
import { useEffect, useState } from "react";

const Button = () => {
	const navigate = useNavigate();
	const [is_login, setIsLogin] = useState(false);
	
	const loginCheck = async (user) => {
		if(user){
			setIsLogin(true);
		} else {
			setIsLogin(false);
		}
	};

	useEffect(() => {
		onAuthStateChanged(auth, loginCheck)
	},[])

	return (
		<>
		{ is_login
			? (
				<ElButton onClick={() => {
					navigate("/write")
				}}>
					<img src={imgsrc} />
				</ElButton>
			) 
			: (null)
		}
		</>
		
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