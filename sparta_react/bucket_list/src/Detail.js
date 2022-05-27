import {useParams, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {deleteBucket, updateBucket} from "./redux/modules/bucket"

function Detail(props) {
	const dispatch = useDispatch();
	const {goBack} = useHistory();
	const {index} = useParams();
	const bucket_list = useSelector((state) => state.bucket.list);
	return (
		<div>
			<h1>상세페이지 입니다.</h1>
			{bucket_list[index].text}
			<button onClick={() => {
				dispatch(updateBucket(index))
			}}>완료하기</button>
			<button onClick={() => {
				dispatch(deleteBucket(index))
				goBack();
			}}>삭제하기</button>
		</div>
	);
}
export default Detail;