import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({id, image_url, is_me, name, text}) => {
	const navigate = useNavigate()
	const user_info = useSelector((state) => state.user.user);
	console.log(user_info)
	return (
		<CardInner>
			{/* <div className="user_name">{user_info.user_name}</div> */}
			<CardAtag href="#0">
				{ 
					is_me && (
						<button onClick={() => {
							navigate(`/write/${id}`)
						}}>
							수정
						</button>
					)
				}
				<Thumnail style={{backgroundImage: `url(${image_url})`}}></Thumnail>
			</CardAtag>
			<TitInner>
				<div>
					<span className='like'>좋아요 6개</span>
					<span className='comment'>댓글 7개</span>
				</div>
				<div>하트</div>
			</TitInner>
		</CardInner>
	);
}
const CardInner = styled.div`
	width: 100%;
	margin-bottom: 30px;
	position: relative;
	& .user_name {
		position: absolute;
		top: 10px;
	}
`
const CardAtag = styled.a`
	display: block;
	background: 0 0 !important;
	text-align: right;
	& button {
		width: 6vw;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
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
	border-radius: 6px;
	background: center center #333 no-repeat;
	background-size: cover;
	-webkit-transition: background-image 0.2s ease-in;
	transition: background-image 0.2s ease-in;
`

const TitInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 12px;
	margin-top: 8px;
	& .like{margin-right:10px}
`

export default Card;