function Dog(props) {	
	console.log(props)
	const news = () => {
		console.log(props)
		props.history.push("/")
	}
	return (
		<div onClick={news}>Dog 화면입니다!</div>
	);
}
export default Dog;