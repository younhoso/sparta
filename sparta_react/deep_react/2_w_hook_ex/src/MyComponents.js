import React, {useState, useEffect} from 'react';

const MyComponents = () => {
	const [soneValue, setValue] = useState("hi");
	
	const clickHandle = () => {
		setValue('바꿀거야')
	}

	useEffect(() => {
		console.log(soneValue)		
	},[soneValue])

	useEffect(() => {
		console.log('나여기 있어')

		return () => {
			
		}
	},[])

	return (
		<div>
			<p>{soneValue}</p>
			<button onClick={clickHandle}>버튼</button>
		</div>
	);
}
export default MyComponents;