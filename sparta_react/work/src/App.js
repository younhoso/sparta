import React,{useState, useRef} from "react";
import Start from "./Start";
import styled from "styled-components";

function App() {
  const ref = useRef();
  const [name, setName] = useState('르탄이');
  const setValue = () => {
    const val = ref.current.value
    setName(val)
  }

  return (
    <Wraper className="App">
      <Start name={name}/>
      <TextWrit>
        <Input type="text" ref={ref}/>
        <Button onClick={setValue}>시작하기</Button>
      </TextWrit>
    </Wraper>
  );
}

const Wraper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const TextWrit = styled.div`
  width: auto;
  margin-top: 50px;
`
const Input = styled.input`
  border: 1px solid #dadafc;
  border-radius: 30px;
  padding: 10px;
`
const Button = styled.button`
  padding: 10px 36px;
  border-color: #dadafc;
  display: block;
  border: none;
  background-color: #dadafc;
  border-radius: 30px;
  margin: 26px auto 0 auto;
`

export default App;