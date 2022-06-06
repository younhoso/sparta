import {Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Write from "./pages/Write";
/**
 * [] til을 보여줄 뷰가 필요해!
 * [] til 젝목, 내용, 공부시간을 가입할 인풋이 필요해!
 * [] 인풋 내용을 하나로 묶어줘야해!
 * [] 묶어준 til data를 뷰로 넣어줘야해 => state를 사용하자!
 * [] til list가 뷰에 뿌려져야해
 */

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
    </div>
  );
}

export default App;
