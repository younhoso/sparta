import React from 'react'; 
import styled from 'styled-components';

const BucketList = ({list}) => {
    const my_wrap = React.useRef(null);
    console.log(my_wrap)
    window.setTimeout(() => {
        console.log(my_wrap)
    }, 1000);
    return (
        <div ref={my_wrap}>
            {list.map((list, index) => {
                return (<ItemStyle className='list-item' key={index}>{list}</ItemStyle>);
            })}
        </div>
    );
}

const ItemStyle = styled.div`
	padding: 16px;
	margin: 8px ;
	background-color: aliceblue;
`;
export default BucketList;