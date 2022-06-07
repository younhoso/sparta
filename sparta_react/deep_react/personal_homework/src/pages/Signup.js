import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { collection, addDoc } from "firebase/firestore";
import { auth, db} from "../shared/firebase";

const Signup = () => {
	const [id, setId] = useState("");
	const [pwd, setPwd] = useState("");
	const [pwd_check, setPwdCheck] = useState("");
	const [user_name, setUserName] = useState("");

	const signup = async () => {

		if (pwd !== pwd_check) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }

    const user = await createUserWithEmailAndPassword(
      auth, 
      id, 
			pwd,
			user_name
    );
    console.log(user)

    const user_doc = await addDoc(collection(db, "users"), {
      user_id: user.user.email,
      name: user_name
    });

    console.log(user_doc.id)
  }

	return (
		<div>
			아이디(이메일): <input onChange={(e) => {
				setId(e.target.value);
			}}/> <br/>
			비밀번호: <input type="password" onChange={(e) => {
				setPwd(e.target.value)
			}}/> <br/>
			비밀번호 확인: <input type="password" onChange={(e) => {
				setPwdCheck(e.target.value)
			}}/> <br/>
			이름: <input onChange={(e) => {
				setUserName(e.target.value)
			}}/> <br/>
			
			<button onClick={signup}>회원가입</button>
		</div>
	);
}
export default Signup;