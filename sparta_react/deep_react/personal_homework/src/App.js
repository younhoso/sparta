import {Routes, Route} from "react-router-dom";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Write from "./pages/Write"
import Header from "./components/Header";
import Button from "./components/Button"

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      <Button />
    </div>
  );
}

export default App;
