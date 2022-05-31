import styled from "styled-components";

const AddBtn = () => {
	return (
		<LinkInner>
			<Alink href="/word/add">
				<svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 10h-4v-4c0-1.104-.896-2-2-2s-2 .896-2 2l.071 4h-4.071c-1.104 0-2 .896-2 2s.896 2 2 2l4.071-.071-.071 4.071c0 1.104.896 2 2 2s2-.896 2-2v-4.071l4 .071c1.104 0 2-.896 2-2s-.896-2-2-2z"></path></svg>
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
	font-size: 45px;
	display: inline-block;
	padding: 8px;
	border-radius: 50%;
	background-color: #000;
	height: 45px;
	line-height: 45px;
`
export default AddBtn;