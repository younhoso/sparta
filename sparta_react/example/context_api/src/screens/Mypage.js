import { useContext, useEffect } from 'react';
import { UserContext } from '../store/UserStore'; // contextAPI를 불러오기 위해선 useContext를 사용해야된다.

const Mypage = () => {
	/**
	 * useContext의 인자값으로 UserContext를 넣어준다. 
	 * 그럼 UserStore에 있는 상태의 value와 setValue 함수를 가져와서 사용할수 있습니다.
	 */
	const context = useContext(UserContext);
	const {username, email, setUsername, setEmail} = context;

	useEffect(() => {
		setUsername('thdbsgh')
		setEmail('thdbsgh@email.com')
	},[])
	
	return (
		<div>
			<h3>username: {username}</h3>
    	<h3>email: {email}</h3>
		</div>
	);
}
export default Mypage;