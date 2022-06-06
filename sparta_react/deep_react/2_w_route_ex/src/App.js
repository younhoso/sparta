import {Routes, Route} from 'react-router-dom';
import Cat from "./Cat";
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cat/:name' element={<Cat />}></Route>
      </Routes>
    </div>
  );
}

export default App;
