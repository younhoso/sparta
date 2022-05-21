import React from 'react';
import BuckeList from './BuckeList'
import styled from "styled-components";
import "./style.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list : ["영화관 가기", "매일 책읽기" , "수영 배우기"],
    }
  }

  render() {
    return (
      <div className='App'>
        <Container>
          <Title>내 버킷리스트</Title>
          <Line />
          <BuckeList list={this.state.list}/>
        </Container>
      </div>
    )
  }
}


// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <BuckeList/>
//     </div>
//   );
// }

const Container = styled.div`
    width: 50vw;
    height: 80vh;
    margin: auto;
    background-color: #fff;
    max-width: 350px;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
`
const Title = styled.h1`
	color: slateblue;
	text-align: center;
`

const Line = styled.hr`
  margin: 16px 0;
`

export default App;
