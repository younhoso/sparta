import React from 'react';
import styled from "styled-components";

function Start({name}) {

  return (
    <TextPrint>나는 {name ? <Text>{name}</Text> : null} 에 대해서<br/> 얼마나 알고 있을까?</TextPrint>
  );
}


const TextPrint = styled.div`
  height: 30px;
  line-height: 30px;
`

const Text = styled.span`
  background-color: #fef5d4;
  padding: 5px 10px;
  border-radius: 30px;
`
export default Start;
