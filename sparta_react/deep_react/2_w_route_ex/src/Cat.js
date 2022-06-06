import {useParams, useNavigate} from "react-router-dom";
const Cat = () => {
	const params = useParams();
	const navigate = useNavigate();
	return(
		<div>
			<h1>고양이!</h1>
			<button onClick={() => {
				navigate("/");
			}}>메인 페이지 가기</button>
		</div>
	)
}

export default Cat;