import { Route, Routes } from 'react-router-dom';
import UserStore from "./store/UserStore"
import Myapge from "./screens/Mypage";

function App() {
  return (
    <UserStore> {/* 제일 위쪽에서 UserStore를 감싸준다. */}
      <Routes>
        <Route path='/mypage' element={<Myapge />}/>
      </Routes>
    </UserStore>
  );
}

export default App;