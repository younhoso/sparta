function Cat({match, history}) {
	console.log(match.params.cat_name)
	const back = () => {
		return history.goBack()
	}
	return (
		<div>
			Cat 화면 입니다.
			<button onClick={back}>뒤로</button>
		</div>
	);
}
export default Cat;