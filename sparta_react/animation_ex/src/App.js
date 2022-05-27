import styled, { keyframes } from "styled-components";

function App() {
  return (
    <div className="App">
      <Box />
    </div>
  );
}

const boxAnimation = keyframes`
  0% {
    border-radius: 0px;
    top: 400px;
  }
  50% {
    border-radius: 50px;
    top: 700px;
  }
  100% {
    border-radius: 0px;
    top: 30px;
  }
`

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  border-radius: 0;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${boxAnimation} 2s 1s infinite linear;
`

export default App;
