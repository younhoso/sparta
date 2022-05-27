import styled from 'styled-components';
import {useSelector} from "react-redux"

function Progress(props) {
	const bucketList = useSelector((state) => state.bucket.list);
	let count = 0;
	bucketList.map((el, idx) => {
		if(el.completed){
			count++;
		}
	});
	return (
		<ProgressBar>
			<HighLight width={(count/bucketList.length)*100+"%"}/>
		</ProgressBar>
	);
};

const ProgressBar = styled.div`
	background-color: #eee;
	width: 100%;
	height: 40px;
`;

const HighLight = styled.div`
	background-color: red;
	transition: width 1s ease-in-out;
	width: ${({width}) => width};
	height: 100%;

`;

export default Progress;