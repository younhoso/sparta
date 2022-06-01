import {useParams, useHistory} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import Button from '@mui/material/Button';

import {deleteBucketFB, updateBucketFB} from "./redux/modules/bucket"

function Detail(props) {
	const dispatch = useDispatch();
	const {goBack} = useHistory();
	const {index} = useParams();
	const bucket_list = useSelector((state) => state.bucket.list);

	return (
		<div>
			<h1>{bucket_list[index] ? bucket_list[index].text : "" }</h1>
			<Button variant="outlined" color="primary" onClick={() => {
				dispatch(updateBucketFB(bucket_list[index].id))
			}}>완료하기</Button>
			<Button variant="outlined" color="error" onClick={() => {
				dispatch(deleteBucketFB(bucket_list[index].id))
				goBack();
			}}>삭제하기</Button>
		</div>
	);
}
export default Detail;