import {useParams, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {deleteBucketFB, updateBucketFB} from "./redux/modules/bucket"

function Detail(props) {
	const dispatch = useDispatch();
	const {goBack} = useHistory();
	const {index} = useParams();
	const bucket_list = useSelector((state) => state.bucket.list);

	return (
		<div>
			<h1>{bucket_list[index] ? bucket_list[index].text : "" }</h1>
			<button onClick={() => {
				dispatch(updateBucketFB(bucket_list[index].id))
			}}>완료하기</button>
			<button onClick={() => {
				dispatch(deleteBucketFB(bucket_list[index].id))
				goBack();
			}}>삭제하기</button>
		</div>
	);
}
export default Detail;