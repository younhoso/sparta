import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({id, image_url, is_me, name, text}) => {
	const navigate = useNavigate()
	const user_info = useSelector((state) => state.user.user);
	return (
		<CardInner>
			<CardHeader>
				{ user_info && <div className="user_name">{user_info.user_name}</div>}
				{ is_me && (
					<button onClick={() => {
						navigate(`/write/${id}`)
					}}>수정</button>
				)}
			</CardHeader>
			<CardAtag href="#0">
				<Thumnail style={{backgroundImage: `url(${image_url})`}}></Thumnail>
			</CardAtag>
			<CardFooter>
				<div>
					<span className='like'>좋아요 6개</span>
					<span className='comment'>댓글 7개</span>
				</div>
				<div>하트</div>
			</CardFooter>
		</CardInner>
	);
}
const CardInner = styled.div`
	width: 100%;
	margin-bottom: 30px;
	border: 1px solid #cccccc;
	border-radius: 0.6em;
	background-color: #fff;
	position: relative;
`
const CardAtag = styled.a`
	display: block;
	background: 0 0 !important;
	text-align: right;
`
const CardHeader = styled.div`
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	font-weight: 600;
	& button {
		width: 50px;
		height: 30px;
		line-height: 30px;
		background-color: #333;
		color: #fff;
		font-size: 14px;
		border-radius: 8px;
		border: none;
		cursor: pointer;
	}
`

const Thumnail = styled.span`
	display: block;
	padding-top: 50%;
	background: center center #333 no-repeat;
	background-size: cover;
	-webkit-transition: background-image 0.2s ease-in;
	transition: background-image 0.2s ease-in;
`

const CardFooter = styled.div`
	height: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 12px;
	margin: 0 15px;
	& .like{margin-right:10px}
`

export default Card;