// 리액트 패키지를 불러옵니다.
import React from 'react'; 
import styled from 'styled-components';

// 함수형 컴포넌트는 이렇게 쓸 수도 있고
// function Bucketlist(props){
//     return (
//         <div>버킷 리스트</div>
//     );
// }

// 이렇게 쓸 수도 있어요. =>가 들어간 함수를 화살표 함수라고 불러요.
// 저희는 앞으로 화살표 함수를 사용할거예요.
// 앗 () 안에 props! 부모 컴포넌트에게 받아온 데이터입니다.
// js 함수가 값을 받아오는 것과 똑같이 받아오네요.
const BucketList = ({list}) => {
    
    // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?

    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <div>
            {
							list.map((list, index) => {
									return (<ItemStyle className='list-item' key={index}>{list}</ItemStyle>);
							})
            }
        </div>
    );
}

const ItemStyle = styled.div`
	padding: 16px;
	margin: 8px ;
	background-color: aliceblue;
`;
export default BucketList;