import styled from "styled-components";
import plus from "../imgs/plus.svg"

const AddBtn = () => {
	return (
		<LinkInner>
			<Alink href="/word/add">
				<img style={{width:"40px"}} src={plus} />
			</Alink>
		</LinkInner>
	);
}

const LinkInner = styled.div`
	position: absolute;
	bottom: 20px;
	right: 20px;
`
const Alink = styled.a`
	color: #fff;
	display: inline-block;
	padding: 8px;
	border-radius: 50%;
	background-color: #444;
	box-shadow: 0 0.1em 0.4em rgb(0 0 0 / 30%);
	transition: transform 0.15s ease-in-out;
	&:hover {
		transform: rotate(90deg);
	}
`
export default AddBtn;