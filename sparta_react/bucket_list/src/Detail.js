import {useParams} from "react-router-dom";
import {useSelector} from 'react-redux';

function Detail(props) {
	const {index} = useParams();
	const bucket_list = useSelector((state) => state.bucket.list);
	
	return (
		<div>
			<h1>상세페이지 입니다.</h1>
			{bucket_list[index]}
		</div>
	);
}
export default Detail;