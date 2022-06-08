import styled from 'styled-components';

const Card = ({image_url, text}) => {
	return (
		<CardInner>
			<CardAtag href="#0">
				<Thumnail style={{backgroundImage: `url(${image_url})`}}></Thumnail>
			</CardAtag>
			<TitInner>
				<div>
					<span className='like'>좋아요 6</span>
					<span className='comment'>댓글 7</span>
				</div>
				<div>하트</div>
			</TitInner>
		</CardInner>
	);
}
const CardInner = styled.div`
	width: 100%;
	margin-bottom: 30px;
`
const CardAtag = styled.a`
	display: block;
	background: 0 0 !important;
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