import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { changeName, changeAge } from "./redux/modules/catSlice";

function App() {
  const cat = useSelector(state => state.cat)
  const dispath = useDispatch();
  console.log(cat)
  return (
    <div className="App">
      <p>name: {cat.name}</p>
      <p>age: {cat.age}</p>
      <button onClick={() => {
        dispath(changeName('루비'))
        dispath(changeAge(110))
      }}>이름 바꾸기</button>
    </div>
  );
}

export default App;
