import React from 'react';
import BuckeList from './BuckeList'
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
        <div className='container'>
          <h1>내 버킷리스트</h1>
          <hr className='line'/>
          <BuckeList list={this.state.list}/>
        </div>
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

export default App;
