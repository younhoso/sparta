import styled from "styled-components";

const Header = () => {
	return (
		<Title>
			중국어 단어장
		</Title>
	)
}

const Title = styled.div`
	text-align: center;
	font-size: 20px;
	font-weight: 600;
	border-bottom: 1px solid #000;
	padding: 10px 0;
`

export default Header;