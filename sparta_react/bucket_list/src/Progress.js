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
			<Dot />
		</ProgressBar>
	);
};

const ProgressBar = styled.div`
	background-color: #eee;
	width: 100%;
	height: 20px;
	display: flex;
	border-radius: 1rem;
`;

const HighLight = styled.div`
	background-color: slateblue;
	transition: width 1s ease-in-out;
	width: ${({width}) => width};
	height: 100%;
	border-radius: 1rem;
`;

const Dot = styled.div`
	width: 30px;
	height: 30px;
	background-color: #fff;
	border: 5px solid #673ab7;
	border-radius: 50%;
	margin: -10px 0 0 -20px;
`
export default Progress;